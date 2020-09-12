
import * as express from 'express';
import * as path from 'path';
var ip = require("ip");


let app = express();

app.use('/', express.static(path.join(__dirname, '../public')));



let port = process.env.PORT || 8080;;

app.listen(port);

console.log(`server up and running on ${ip.address()}:8080`);
console.log('hello world');



