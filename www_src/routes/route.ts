import {Request, Response} from 'express';
import * as express from 'express';
import * as path from 'path';

const DIR_TS_OUT = 'public';
const app = express();
const dirname = path.join(__dirname, '..', DIR_TS_OUT);

export function routes() {
  app.get('/tarot', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: dirname});
   // res.send('bobo');
  });
}


