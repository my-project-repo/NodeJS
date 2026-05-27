import express from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { getUser, postUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/info", getUser);
router.post("/signup", validate, postUser);

export default router;
