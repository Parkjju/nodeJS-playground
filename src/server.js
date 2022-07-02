import express from 'express';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';

const PORT = 4000;
const app = express();

const handleListening = () => {
    console.log('Server Listening on http://localhost:4000');
};

app.use('/', globalRouter);
app.use('/user', userRouter);

app.listen(PORT, handleListening);
