import { json, Router } from "express";
import { register } from "../model/ipaddatabase.js";
import { keyGen } from "../utils/keyAlgorithm.js";

const router = Router();
router.use(json());

router.post("/register", async (req, res) => {
  const body = req.body;

  if (body.key != keyGen(String(body.schoolNumber).toLowerCase())) {
    return res.json({
      status: "wrongKey",
    });
  }
  try {
    await register(String(body.schoolNumber).toLowerCase(), body.ipadNumber);
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
