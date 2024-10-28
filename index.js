const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-message', async (req, res) => {
    const { botToken, channelId, message } = req.body;

    const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
    const data = {
        content: message
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bot ${botToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            res.status(200).send('Message sent successfully!');
        } else {
            res.status(response.status).send('Failed to send message.');
        }
    } catch (error) {
        res.status(500).send('Error sending message.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
