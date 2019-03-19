import express from 'express';
import bodyParser from 'body-parser';

import messageRoutes from './v1/routes/messages.route';
import UserRoutes from './v1/routes/users.route';
import messageRoutesv2 from './v2/routes/messages.route';
import UserRoutesv2 from './v2/routes/users.route';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => res.status(200).json({ message: 'Hello, welcome to EPIC Mail' }));

app.use('/api/v1/messages/', messageRoutes);
app.use('/api/v1/auth/', UserRoutes);
app.use('/api/v2/messages/', messageRoutesv2);
app.use('/api/v2/auth/', UserRoutesv2);

export default app;
