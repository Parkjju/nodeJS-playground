import express from 'express';
import { handleUser, handleMypage } from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get('/', handleUser);
userRouter.get('/mypage', handleMypage);

export default userRouter;
