import express from 'express';
import bodyParser from 'body-parser';
import swagger from 'swagger-ui-express';
import swaggerDocument from './config/swagger.json';

import messageRoutes from './routes/messages.route';
import UserRoutes from './routes/users.route';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => res.status(200).json({ message: 'Hello, welcome to EPIC Mail' }));

app.use('/api/v1/api-docs', swagger.serve, swagger.setup(swaggerDocument, { explorer: true }));

app.use('/api/v1/messages/', messageRoutes);
app.use('/api/v1/auth/', UserRoutes);

export default app;
