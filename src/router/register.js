import { json, Router } from "express";
import { register } from "../model/ipaddatabase.js";

const router = Router();
router.use(json());

router.post("/register", async (req, res) => {
  const body = req.body;
  try {
    await register(
      body.schoolNumber,
      body.classNumber,
      body.name,
      body.ipadNumber
    );
    res.json({
      status: "succeed",
    });
  } catch (e) {
    res.json({
      status: "fail",
      error: e,
    });
  }
});

export default router;
