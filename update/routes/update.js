import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import logger from '../utils/logger.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const dataFilePath = path.join(__dirname, '../bio/bio.json');

const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

const readData = () => {
  if (fs.existsSync(dataFilePath)) {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  }
  return {};
};

router.post('/', (req, res) => {
  try {
    const { bio } = req.body;
    if (!bio) {
      return res.status(400).json({ error: 'Bio is required' });
    }

    const data = readData();
    data.bio = bio;
    writeData(data);

    res.status(200).json({ message: 'Bio updated successfully' });
  } catch (error) {
    logger.error('Error updating bio:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;