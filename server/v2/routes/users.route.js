import { Router } from 'express';

import UserController from '../controllers/user.controllerV2';

const router = Router();

router.post('/signup', UserController.userSignup);
router.post('/login', UserController.userLogin);

export default router;
