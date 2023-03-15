import express from 'express';
import { Router, Request, Response, Express } from 'express';

import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import DownloadController from './controllers/DownloadController';


dotenv.config();

const app: Express = express();

const router: Router = Router();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


router.post('/download', (req: Request, res: Response) => DownloadController.download(req, res));

app.use(router);


app.listen(process.env.APP_PORT, () => `Server running on port ${process.env.APP_PORT}`);