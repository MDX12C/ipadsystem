import express from "express";
import Register from "./router/register.js";
import path from "node:path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 8888;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(Register);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
