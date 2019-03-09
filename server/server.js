// server.js
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your Server is working' }));

const port = process.env.PORT || 7440;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
