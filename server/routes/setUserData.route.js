import { Router } from 'express';

import { checkAuth } from '../utils/checkAuth.js';

import { getUserData, setUserNickName } from '../controllers/setUserData.js';

const router = new Router();

router.get('/getUser', getUserData);

router.post('/setNickName', setUserNickName);

export default router;