import express from 'express';
import userRouter from './app/user/router';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const databaseUri = `mongodb://${process.env.DATABASE_USER}:${
  process.env.DATABASE_PASSWORD
}@ds125673.mlab.com:25673/destetik`;

mongoose
  .connect(databaseUri, {
    useNewUrlParser: true
  })
  .then(() => console.log('Database Connected.'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Server is running! Port: ${port}`));
