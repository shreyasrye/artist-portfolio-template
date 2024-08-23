import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger.js';
import artworkRoutes from './routes/artworks.js';
import cors from 'cors';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));
app.use('/artworks', artworkRoutes);
app.use((err, req, res, next) => {
  logger.error(`${err.message}`);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  logger.info(`Artwork Service running on port ${port}`);
});