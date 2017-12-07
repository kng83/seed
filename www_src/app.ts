import * as _ from 'lodash';
import * as express from 'express';
import {Response, Request} from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as serveStatic from 'serve-static';

// import path from 'path';

const app = express();
const port = 3000;


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });

  const dirname = path.join(__dirname, '..', 'dist');

// app.use(serveStatic(dirname , {'index': 'index.html'}));
app.use(express.static(dirname));
app.use( bodyParser.json() );
console.log(__dirname);

app.get('/name', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: dirname});
});


app.listen(port, () => console.log('Listen on Port: 3000 '));
console.log('this is pawel');




