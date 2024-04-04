import express from "express";
import {
  registerContoller,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routing
//register || method post
router.post("/register", registerContoller);

//LOGIN || POST
router.post("/login", loginController);

//routes
router.get("/check", requireSignIn, isAdmin, testController);

export default router;
