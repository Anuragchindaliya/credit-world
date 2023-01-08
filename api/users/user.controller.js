import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.model.js";

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "all fields are required" });
  }

  const existResult = await User.checkExist({ email });
  console.log("contactExist", existResult?.[0].length);
  if (existResult?.[0].length) {
    return res
      .status(409)
      .json({ status: 409, message: "User already registered" });
  }
  const salt = genSaltSync(10);
  const encryptPassword = hashSync(password, salt);
  const user = new User({
    name,
    email,
    password: encryptPassword,
  });
  let message = "";
  try {
    const userResult = await user.save();
    if (userResult?.[0]?.affectedRows) {
      message += "Successfully";
    } else {
      throw new Error("sql error: ", userResult);
    }

    // send mail with defined transport object
    // const mailFormat = {
    //   from: `"Creditworld" <${process.env.MAIL}>`, // sender address
    //   to: email,
    //   subject: `Credit card applied`, // Subject line
    //   html: bodyHtml, // html body
    // };
    // const info = await sendMail(mailFormat);
    // if (info?.rejected?.length) {
    //   return res.json({ message: "Subscribe Error" });
    // } else {
    //   messageRes += " subscribed";
    // }
  } catch (error) {
    console.log(error);
    next(error);
  }

  res.json({ message });
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ message: "all fields are required" });
  }
  const [existResult] = await User.checkExist({ email });
  if (!existResult?.length) {
    return res.status(409).json({ status: 409, message: "User not exist" });
  }
  console.log("userExist", existResult?.[0]);
  const user = existResult?.[0];
  const passwordResult = compareSync(password, user.password);
  if (!passwordResult) {
    return res.status(401).json({ message: "Invalid credential" });
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        email: user.email,
        // roles: user.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    { email: user.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "4d" }
  );

  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    // httpOnly: true, // accessible only by web server
    // sameSite: "None", //cross-site cookie
    Domain: null,
    maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
  });
  // secure: true, //https

  return res.json({ message: "login successfully", accessToken });
};
export const refreshToken = async (req, res, next) => {
  const refreshToken = req?.cookies?.jwt;

  if (!refreshToken)
    return res.status(401).json({ message: "Unauthorized No token" });

  try {
    const jwtResult = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const [existResult] = await User.checkExist({ email: jwtResult.email });
    if (!existResult?.length) {
      return res.status(409).json({ status: 409, message: "User not exist" });
    }
    const foundUser = existResult?.[0];

    if (!foundUser)
      return res.status(401).json({ message: "Unauthorized No User" });

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.email,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    return res.json({ accessToken });
  } catch (error) {
    console.log(error);
    next(error);
  }

  return res.json({ message: "login successfully" });
};

// module.exports = {
//   createUser: (req, res) => {
//     const body = req.body;
//     const salt = genSaltSync(10);
//     body.password = hashSync(body.password, salt);
//     create(body, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: 0,
//           message: "Database connection errror",
//         });
//       }
//       return res.status(200).json({
//         success: 1,
//         data: results,
//       });
//     });
//   },
//   login: (req, res) => {
//     const body = req.body;
//     getUserByUserEmail(body.email, (err, results) => {
//       if (err) {
//         console.log(err);
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           data: "Invalid email or password",
//         });
//       }
//       const result = compareSync(body.password, results.password);
//       if (result) {
//         results.password = undefined;
//         const jsontoken = sign({ result: results }, "qwe1234", {
//           expiresIn: "1h",
//         });
//         return res.json({
//           success: 1,
//           message: "login successfully",
//           token: jsontoken,
//         });
//       } else {
//         return res.json({
//           success: 0,
//           data: "Invalid email or password",
//         });
//       }
//     });
//   },
//   getUserByUserId: (req, res) => {
//     const id = req.params.id;
//     getUserByUserId(id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "Record not Found",
//         });
//       }
//       results.password = undefined;
//       return res.json({
//         success: 1,
//         data: results,
//       });
//     });
//   },
//   getUsers: (req, res) => {
//     getUsers((err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return res.json({
//         success: 1,
//         data: results,
//       });
//     });
//   },
//   updateUsers: (req, res) => {
//     const body = req.body;
//     const salt = genSaltSync(10);
//     body.password = hashSync(body.password, salt);
//     updateUser(body, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       return res.json({
//         success: 1,
//         message: "updated successfully",
//       });
//     });
//   },
//   deleteUser: (req, res) => {
//     const data = req.body;
//     deleteUser(data, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if (!results) {
//         return res.json({
//           success: 0,
//           message: "Record Not Found",
//         });
//       }
//       return res.json({
//         success: 1,
//         message: "user deleted successfully",
//       });
//     });
//   },
// };
