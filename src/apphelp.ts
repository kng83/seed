import * as _ from 'lodash';
import * as express from 'express'
import {Response,Request} from 'express';
// import path from 'path';

var app = express();

app.get('/', (req: Request, res: Response)=>{
    res.sendFile('index.html', {root:__dirname})
});
app.get('/about', (req: Request, res: Response)=>{
    res.sendFile('about.html', {root: __dirname})
});
app.get('/home', (req: Request, res: Response)=>{
    res.sendFile('index.html', {root: __dirname})
});
app.listen(3000,()=>console.log('Listen on Port: 3000 '));
console.log('heddddddda');
/*To jest dlugi komentarz*/


/**
 *
 * @param {string} name of the function
 * @param {number} value index of table
 * @returns {string} name[number] return
 */
function showSomething(name: number[], value: number){
    return name;
}

showSomething([4,4,6],5);

