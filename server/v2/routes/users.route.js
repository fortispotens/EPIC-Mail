import { Router } from 'express';
import { signupValidate, loginValidate } from '../../mid/validator';

import UserController from '../controllers/user.controller';

const router = Router();

router.post('/signup', signupValidate, UserController.userSignup);
router.post('/login', loginValidate, UserController.userLogin);

export default router;
