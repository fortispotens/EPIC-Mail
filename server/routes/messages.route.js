import { Router } from 'express';

import MessageController from '../controllers/message.controller';


const router = Router();

router.post('/', MessageController.sendNewMessage);
router.get('/', MessageController.getAllMessages);
router.get('/:id', MessageController.getSpecificMessage);
router.get('/message/unread', MessageController.getUnreadMessage);


export default router;
