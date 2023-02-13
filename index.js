import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import corsOptions from "./config/corsOptions.js";
import bankRoute from "./routes/bankRoute.js";
import cardRoute from "./routes/cardRoute.js";
import subsRoute from "./routes/subsRoute.js";
import { logger } from "./middlewares/logger.js";
import applicantRoute from "./routes/applicantRoute.js";
import applierRoute from "./routes/applierRoute.js";
import userRouter from "./api/users/user.route.js";
import requestRoute from "./routes/requestRoute.js";
const app = express();
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(con);
// });

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // parse json bodies in the request object
app.use(cookieParser());

//--built in middleware
app.use(logger);

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/cards", cardRoute);
app.use("/banks", bankRoute);
app.use("/subs", subsRoute);
app.use("/applicants", applicantRoute);
app.use("/requests", requestRoute);
app.use("/applier", applierRoute);
app.use("/auth", userRouter);

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
