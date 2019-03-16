import { Router } from 'express';

import MessageController from '../controllers/message.controller';


const router = Router();

router.post('/', MessageController.sendNewMessage);
router.get('/', MessageController.getAllMessages);
router.get('/:id', MessageController.getSpecificMessage);
router.get('/status/unread', MessageController.getUnreadMessages);
router.get('/status/sent', MessageController.getSentMessages);
router.delete('/:id', MessageController.deleteSpecificMessage);


export default router;
