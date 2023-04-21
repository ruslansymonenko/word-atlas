import { Router } from 'express';

import { registration } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";
import { getMe } from "../controllers/auth.js";

import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

router.post('/registration', registration);

router.post('/login', login);

router.get('/me', checkAuth, getMe);


export default router;