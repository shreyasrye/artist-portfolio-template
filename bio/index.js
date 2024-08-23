import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger.js';
import bioRoutes from './routes/bio.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use(morgan('combined', { stream: logger.stream }));

app.use('/bio', bioRoutes);

app.use((err, req, res, next) => {
  logger.error(`${err.message}`);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  logger.info(`Bio Service running on port ${port}`);
});
