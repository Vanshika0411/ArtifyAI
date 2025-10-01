 import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Stable Diffusion API Endpoint
app.post('/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // Call Replicate API for Stable Diffusion
        const response = await axios.post('https://api.replicate.com/v1/predictions', {
            version: "latest-stable-diffusion-version", // Replace with actual version ID
            input: { prompt }
        }, {
            headers: {
                'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
