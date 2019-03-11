import MessageService from '../services/message.services';

const MealController = {
  fetchAllMeals(req, res) {
    const allMessages = MessageService.fetchAllMessages();
    return res.json({
      status: 'success',
      data: allMessages
    }).status(200);
  },
  createNewMessage(req, res) {
    const newMessage = req.body;
    const createdMessage = MealService.createNewMessage(newMessage);
    return res.json({
      status: 'success',
      data: createdMessage
    }).status(201);
  },
  fetchUnreadMessage(req, res) {
    const { status } = req.params;
    const unreadMessage = MealService.fetchUnreadMessage(status);
    return res.json({
      status: 'success',
      data: unreadMessage
    }).status(200);
  },
  fetchSentMessage(req, res) {
    const { status } = req.params;
    const sentMessage = MealService.fetchSentMessage(status);
    return res.json({
      status: 'success',
      data: sentMessage
    }).status(200);
  },
  fetchSpecificMessage(req, res) {
    const { id } = req.params;
    const specificMessage = MealService.fetchSpecificMessage(id);
    return res.json({
      status: 'success',
      data: specificMessage
    }).status(200);
  },
  deleteSpecificMessage(req, res) {
    const { id } = req.params;
    const deleteMessage = MealService.deleteSpecificMessage(statusid);
    return res.json({
      status: 'success',
      data: deleteMessage
    }).status(200);
  }
};

export default MessageController;
