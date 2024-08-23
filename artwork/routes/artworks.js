import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();


const uri = 'mongodb+srv://shreyasrai23:8F7O5pSJGsZ8ZT85@cluster0.f21wc.mongodb.net/';
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('artPortfolio');
        const artworks = database.collection('artworks');

        const allArtworks = await artworks.find({}).toArray();
        console.log('All artworks:', allArtworks);
        res.json(allArtworks);
    } catch (error) {
        console.error('Error fetching artworks:', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
});

export default router;
