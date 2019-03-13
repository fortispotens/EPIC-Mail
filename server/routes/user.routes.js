import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.post('/signup', UserController.userSignup);

export default router;
