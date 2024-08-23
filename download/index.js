import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger.js';
import downloadRoutes from './routes/download.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3004;
logger.info('Resume service is starting...');

app.use(cors());
app.use(express.json());

logger.stream = {
  write: function(message) {
    logger.info(message.trim());
  }
};

app.use(morgan('combined', { stream: logger.stream }));

app.use('/download', downloadRoutes);

app.use((err, req, res, next) => {
  logger.error(`${err.message}`);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  logger.info(`Download Service running on port ${port}`);
});