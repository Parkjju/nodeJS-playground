import express from 'express';

const PORT = 4000;
const app = express();

// what is server?
// computer that turned on all the time

const customMiddleware = (req, res, next) => {
    console.log(req.protocol);
    console.log(req.url);
    console.log('Middle!!');
    next();
};

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT} 🗼`);

const handleHome = (req, res) => {
    console.log('Final');
    return res.send('<h1>Hello~</h1>');
};
app.get('/me', customMiddleware, handleHome);
app.get('/', customMiddleware, handleHome);

app.listen(PORT, handleListening);
