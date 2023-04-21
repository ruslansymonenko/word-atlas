import { Router } from 'express';

import { registration } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";
import { getMe } from "../controllers/auth.js";

const router = new Router();

router.post('/registration', registration);

router.post('/login', login);

router.post('/me', getMe);


export default router;