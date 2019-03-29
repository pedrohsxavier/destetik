import express from 'express';
import controller from './controller'

const userRouter = express.Router();

userRouter.get('/test', controller.test);

export default userRouter;