import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

// Use POST method for signup route
router.post("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;
