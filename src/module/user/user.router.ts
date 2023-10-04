import { Router } from "express";
import { createUser, loginUser } from "./user.controller";
import { verifyLogin, verifyUser } from "./user.validation";

const router = Router();

router.post('/register', verifyUser, createUser);
router.post('/login', verifyLogin, loginUser);

export default router;