import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => res.status(200).send({ message: 'Server is working' }));

app.get('/api/v1/messages', (req, res) => res.status(200).send({ message: 'Congratulations! Here are your messages' }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
