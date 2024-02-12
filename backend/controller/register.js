import express from "express";
import { Router } from "express";
import bycrptjs from "bcryptjs";
import cookieParser from "cookie-parser";
import model from "../model/model";

const app = express();
const router = Router();

router.post("/api/register", async (req, res) => {
  try {
    const {
      childFullNames,
      childAge,
      homeAddress,
      parentNames,
      stateOfOrigin,
      childClass,
      parentsEmail,
      password,
    } = req.body;

    if (
      !childFullNames ||
      !homeAddress ||
      !parentNames ||
      !stateOfOrigin ||
      !childClass ||
      !parentsEmail ||
      !password
    ) {
      res.status(400).res.send({ message: 'All fields are required' })
    }
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
