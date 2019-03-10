export default {
  messages: [
    {
      id: 1,
      createdOn: new Date().toLocaleDateString(),
      subject: 'I am coming',
      message: 'I have come in',
      parentMessageId: 1,
      status: 'unread'
    },
    {
      id: 2,
      createdOn: new Date().toLocaleDateString(),
      subject: 'Travelling',
      message: 'I have travlled to Germany',
      parentMessageId: 2,
      status: 'read'
    }
  ]
};
