import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.post('/signup', UserController.userSignup);
router.post('/login', UserController.userLogin);

export default router;
