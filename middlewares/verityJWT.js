import jwt from "jsonwebtoken";

// export function verityJWT(req, res, next) {
//   let token = req.get("authorization");
//   if (token) {
//     // Remove Bearer from string
//     token = token.slice(7);
//     verify(token, process.env.JWT_KEY, (err, decoded) => {
//       if (err) {
//         return res.json({
//           success: 0,
//           message: "Invalid Token...",
//         });
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.json({
//       success: 0,
//       message: "Access Denied! Unauthorized User",
//     });
//   }
// }
export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  const [authType, token] = authHeader.split(" ");

  if (authType !== "Bearer") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: "Forbidden verifyJWT", err });
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;
    next();
  });
};
