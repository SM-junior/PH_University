import express from 'express';
import { Application, json, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.route';
const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//application routes
app.use('/api/v1/students', StudentRoute);

const getAController = (req: Request, res: Response) => {
  var a = 10;
  res.send(a);
};

app.get('/', getAController);

export default app;