import { Router } from 'express';

import MessageController from '../controllers/message.controller';


const router = Router();

router.post('/', MessageController.sendNewMessage);
router.get('/', MessageController.getAllMessages);
router.get('/:id', MessageController.getSpecificMessage);
router.get('/status/unread', MessageController.getUnreadMessage);
router.get('/status/sent', MessageController.getSentMessage);
router.delete('/:id', MessageController.deleteSpecificMessage);


export default router;
