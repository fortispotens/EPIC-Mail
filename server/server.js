// server.js
import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your Server is working' }));

app.get('/api/v1/messages', (req, res) => res.status(200).send({ message: 'Congratulations! Here are your messages' }));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
