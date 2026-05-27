import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());

//routes
app.use("/user", userRoute);

// server
app.listen(PORT, (req, res) => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
