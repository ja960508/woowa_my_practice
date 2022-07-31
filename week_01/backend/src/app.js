import express from 'express';
import cors from 'cors';
import api from './api/index.js';
import cookieMiddleware from './middleware/cookieMiddleware.js';
import sessionMiddleware from './middleware/sessionMiddleware.js';

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://127.0.0.1:5501', credentials: true }));
app.use(express.json());
app.use(cookieMiddleware);
app.use('/api', api);

app.listen(port, () => {
  console.log('app is listening on port ' + port);
});
