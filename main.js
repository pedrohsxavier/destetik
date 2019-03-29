import express from 'express';
import userRouter from './app/user/router';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Server is running! Port: ${port}`));