import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
// import connectDB from "./server/database/connection";

const app = express();
const port = process.env.PORT || 500;

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(morgan("tiny"));

// const data = { message: "Hello from the backend!" };
// const array = [];
// const dataSave = firstName.req.body;



app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});
