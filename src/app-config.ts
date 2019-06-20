import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

let source = './config/'+process.env.ENV

import { configuration } from './config/config;
// import { config } from "dotenv";

export let dbOptions : ConnectionOptions = {
    type : "mysql",
    host :  config.db.host,
    port : config.db.port,
    username : config.db.username,
    password :  config.db.password,
    database : config.db.database,
    entities : [
        __dirname + '/entities/**/*.js'
   ],
    synchronize : true
}