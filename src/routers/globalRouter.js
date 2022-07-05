import express from 'express';
import {
    handleHome,
    handleTest,
    handleTestRemove,
} from '../controllers/userControllers';

const globalRouter = express.Router();

globalRouter.get('/', handleHome);
globalRouter.get('/test', handleTest);
globalRouter.get('/remove', handleTestRemove);
export default globalRouter;
