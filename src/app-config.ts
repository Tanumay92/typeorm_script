import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

export let dbOptions : ConnectionOptions = {
    type : "mysql",
    host : "127.0.0.1",
    port : 3306,
    username : "root",
    password : "123456",
    database : "typeorm_schema",
    entities : [
        __dirname + '/entities/**/*.js'
   ],
    synchronize : true
}