import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.status(200).json({test: 'Success'})
});

app.listen(port, () => console.log(`Server is running! Port: ${port}`));