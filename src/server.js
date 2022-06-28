import express from 'express';

const PORT = 4000;
const app = express();

// what is server?
// computer that turned on all the time

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT} 🗼`);

const handleHome = (req, res) => {
    return res.send('<h1>Hello~</h1>');
};

app.get('/', handleHome);

app.listen(PORT, handleListening);
