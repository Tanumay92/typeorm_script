import * as express from 'express';
import * as bodyParser from 'body-parser';
import { route } from '../routes';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as appConfig from '../app-config';
// import * as cors from 'cors';

export let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/',route);

app.set("port", process.env.PORT || 5000);

createConnection(appConfig.dbOptions)
                .then(async (connection) => {
                    console.log('Connection Established successfully!!')
                }).catch((err) => {
                    console.log('Db Connection error!',err);
                })   



