import { Router } from 'express';

import GroupController from '../controllers/group.controller';


const router = Router();

router.post('/', GroupController.createNewGroup);


export default router;
