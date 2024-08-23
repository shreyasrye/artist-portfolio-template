import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import logger from './utils/logger.js';
import updateRoutes from './routes/update.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;
app.use(express.json());

app.use(cors());

app.use(morgan('combined', { stream: logger.stream }));

app.use('/update', updateRoutes);

app.use((err, req, res, next) => {
  logger.error(`${err.message}`);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  logger.info(`Update Service running on port ${port}`);
});