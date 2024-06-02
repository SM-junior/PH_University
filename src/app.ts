import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewears/globalErrorhandler';
import router from './app/routes';

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//application routes
// app.use('/api/v1/students', StudentRoute);
// app.use('/api/v1/users', UserRoute);
app.use('/api/v1/', router);
// app.use('/api/v1/users', UserRoute);

const getAController = (req: Request, res: Response) => {
  var a = 10;
  res.send(a);
};

app.get('/', getAController);


app.use(globalErrorHandler)

export default app;