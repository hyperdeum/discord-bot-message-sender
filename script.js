async function sendMessage() {
    const botToken = document.getElementById('botToken').value;
    const channelId = document.getElementById('channelId').value;
    const message = document.getElementById('message').value;

    const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
    const data = {
        content: message
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bot ${botToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Message sent successfully!');
    } else {
        alert('Failed to send message.');
    }
}
