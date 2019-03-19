import { Router } from 'express';

import GroupController from '../controllers/group.controller';


const router = Router();

router.post('/', GroupController.createNewGroup);
router.get('/', GroupController.fetchAllGroups);


export default router;
