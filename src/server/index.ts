import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

interface Score {
  name: string;
  rounds: number;
}

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB_PATH = path.resolve(__dirname, './database.json');

const readScores = (): Score[] => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data).scores;
  } catch (error) {
    console.error('Error reading scores:', error);
    return [];
  }
};

const writeScores = (scores: Score[]): void => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify({ scores }, null, 2));
  } catch (error) {
    console.error('Error writing scores:', error);
  }
};

app.post('/scores', (req, res) => {
  const score: Score = req.body;
  const scores = readScores();
  scores.push(score);
  const topScores = scores.slice(0, 10);
  writeScores(topScores);
  res.status(201).json(score);
});

app.get('/scores', (req, res) => {
  const scores = readScores();
  scores.sort((a, b) => a.rounds - b.rounds);
  res.json(scores);
});

app.listen(port, () => {
  if (!fs.existsSync(DB_PATH)) writeScores([]);
  console.log(`Server running at http://localhost:${port}`);
});