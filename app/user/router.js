import express from 'express';
import UserController from './controller';
const userRouter = express.Router();

userRouter.post('/register', UserController.store);
userRouter.patch('/update/:id', UserController.update);
userRouter.get('/user/:id', UserController.show);
userRouter.get('/user', UserController.showAll);
userRouter.delete('/user/:id', UserController.delete);

export default userRouter;
