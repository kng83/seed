import * as _ from 'lodash';
import * as express from 'express'
import {Response,Request} from 'express';
// import path from 'path';

let app = express();
let port = 3000;

app.get('/name/:user_name', (req: Request, res: Response)=>{
    res.status(200);
    res.set('Content-Type','text/html');
    let helpParams = req.params.user_name;
    res.end(`<html><body><h1>Witaj uzytkowniku:: ${helpParams}</h1><p>To jest bardzo dlugie zdanie przekraczajace linie</p></body><html>`)

});
app.get('/',(req: Request, res: Response)=>{
    res.sendFile('index.html', {root: __dirname});
})

app.listen(port,()=>console.log('Listen on Port: 3000 '));
console.log('this is pawels');




