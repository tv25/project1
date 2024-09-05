import express from 'express';
import helloController from './controller';

const app = express();
const port = 3000;

app.get('/hello', helloController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
