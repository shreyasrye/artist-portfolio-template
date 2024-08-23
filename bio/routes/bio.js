import express from 'express';
import fs from 'fs';
import logger from '../utils/logger.js';

const router = express.Router();
const dataFilePath = './bio.json';

const readData = () => {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

router.get('/', (req, res) => {
  try {
    const bio = readData();
    res.json(bio);
  } catch (error) {
    logger.error(`Failed to fetch bio: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch bio' });
  }
});


router.put('/', (req, res) => {
  try {
    const newBio = req.body;
    console.log(newBio);
    writeData(newBio);
    logger.info(`Bio updated: ${JSON.stringify(newBio)}`);
    res.json(newBio);

    eventBus.publish('bioUpdated', newBio);
  } catch (error) {
    logger.error(`Failed to update bio: ${error.message}`);
    res.status(500).json({ error: 'Failed to update bio' });
  }
});

export default router;
