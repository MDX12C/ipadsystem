import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lazpytb@gmail.com",
    pass: process.env.EMAIL_KEY,
  },
});
