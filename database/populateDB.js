import { MongoClient } from 'mongodb';

// Replace 'username' and 'password' with your actual MongoDB credentials
const uri = 'mongodb+srv://shreyasrai23:8F7O5pSJGsZ8ZT85@cluster0.f21wc.mongodb.net/';
const client = new MongoClient(uri);

const run = async () => {
  try {
    await client.connect();
    const database = client.db('artPortfolio');
    const artworks = database.collection('artworks');

    const initialArtworks = [
      {
        imageURL: "https://i.pinimg.com/736x/c3/ba/eb/c3baebcf6faec731622589b76ae4d487.jpg",
        title: "Bored",
        description: "This is an artwork found on pinterest."
      },
      {
        imageURL: "https://sdayoartgala.weebly.com/uploads/1/5/6/8/15686706/4268958_orig.jpg",
        title: "San Diego",
        description: "Sample Artwork - The San Diego Asian Youth Organization's (SDAYO) 2013 Art Gala"
      }
    ];

    const result = await artworks.insertMany(initialArtworks);
    console.log(`${result.insertedCount} artworks were inserted.`);
  } finally {
    await client.close();
  }
};

run().catch(console.dir);