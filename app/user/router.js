import express from 'express';
import UserController from './controller';
const userRouter = express.Router();

userRouter.post('/register', UserController.store);

export default userRouter;
