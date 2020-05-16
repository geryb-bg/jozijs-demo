import express from 'express';
import http from 'http';
import { wizards } from './data/wizards.js';

const app = express();
const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);

app.use(express.static('public'));

httpServer.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get('/wizards', (req, res) => {
  res.send(wizards);
});
