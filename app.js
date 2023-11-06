import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import cartItems from './constants/cartItem.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/musics', (req, res) => {
  return res.status(200).json(cartItems);
});

app.get('*', (req, res) => {
  res.status(404).json({ message: '404 Page Not Found' });
});

app.listen(8080);
