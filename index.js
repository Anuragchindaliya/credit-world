import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bankRoute from "./routes/bankRoute.js";
import cardRoute from "./routes/cardRoute.js";
const app = express();
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(con);
// });

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/cards", cardRoute);
app.use("/banks", bankRoute);

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
