import express, {Router} from "express";
import {login, logout, register} from "../../controllers/auth";

const router: Router = express.Router();

router.get("/login", login);

router.get("/register", register);

router.get("/logout", logout);

export default router;
