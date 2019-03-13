import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/v1', (req, res) => res.status(200).send({ message: 'Server is working' }));

export default app;
