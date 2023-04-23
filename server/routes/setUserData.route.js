import { Router } from 'express';

import { checkAuth } from '../utils/checkAuth.js';

import { setUserNickName } from '../controllers/setUserData.js';

const router = new Router();

router.post('/setNickName', checkAuth, setUserNickName);

export default router;