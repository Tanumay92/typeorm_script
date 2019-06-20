import * as express from 'express';
import * as bodyParser from 'body-parser';
import { route } from './routes.js';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as appConfig from '../app-config';
import { config } from './config';
// import * as cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

export let app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/',route);

app.set("port", port);

createConnection(appConfig.dbOptions)
                .then(async (connection) => {
                    console.log('Connection Established successfully!! Server port : ',port)
                }).catch((err) => {
                    console.log('Db Connection error!',err);
                })   



