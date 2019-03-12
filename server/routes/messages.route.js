import { Router } from 'express';

import MessageController from '../controllers/message.controller';


const router = Router();

router.get('/', MessageController.getAllMessages);
router.post('/', MessageController.sendNewMessage);
router.get('/unread', MessageController.getUnreadMessage);
router.get('/sent', MessageController.getSentMessage);
router.get('/:id', MessageController.getSpecificMessage);
router.delete('/:id', MessageController.deleteSpecificMessage);

export default router;


// import { Router } from 'express';

// import MessageController from '../controllers/message.controller';


// const router = Router();

// router.get('/', MessageController.fetchAllMessages);
// router.post('/', MessageController.createNewMessage);
// router.get('/unread/', MessageController.fetchUnreadMessage);
// router.get('/sent', MessageController.fetchSentMessage);
// router.get('/:id', MessageController.fetchSpecificMessage);
// router.delete('/:id', MessageController.deleteSpecificMessage);

// export default router;
