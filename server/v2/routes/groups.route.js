import { Router } from 'express';

import GroupController from '../controllers/group.controller';


const router = Router();

router.post('/', GroupController.createNewGroup);
router.get('/', GroupController.fetchAllGroups);
router.get('/:id', GroupController.getSpecificGroup);
router.patch('/:id/name', GroupController.patchGroupName);


export default router;
