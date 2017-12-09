import * as _ from 'lodash';
import * as express from 'express';
import {Response, Request} from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as serveStatic from 'serve-static';
import * as routes from './routes/route';

// import path from 'path';
routes.routes();

const app = express();
const PORT = 3000;
const DIR_TS_OUT = 'public';


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });

  const dirname = path.join(__dirname, '..', DIR_TS_OUT);

// app.use(serveStatic(dirname , {'index': 'index.html'}));
app.use(express.static(dirname));
app.use( bodyParser.json() );

app.get('*', (req: Request, res: Response) => {
  res.sendFile('index.html', {root: dirname});
});


app.listen(PORT, () => console.log(`Listen on Port: ${PORT}`));
console.log('this is super pawdel');





