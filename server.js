import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import Cors from 'cors';

import languageRoute from './api/routes/language.route';
import expertRoute from './api/routes/expert.route';
const server = express();
const port = 3000;

mongoose.connect(
    `mongodb://${'Localhost'}:${'27017'}/${'bys-website'}`,
    { useNewUrlParser: true }
  )

server
    .use(Cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

server
    .use(languageRoute)
    .use(expertRoute);

//server.get('/', (req, res) => res.send('Hello World!'))

server.listen(port, () => console.log(`Example app listening on port ${port}!`));