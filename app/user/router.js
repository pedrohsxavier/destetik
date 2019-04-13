import express from 'express';
import UserController from './controller';
const userRouter = express.Router();

userRouter.post('/register', UserController.store);
userRouter.patch('/update/:id', UserController.update);

export default userRouter;
