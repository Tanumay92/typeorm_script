import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    db : {
        host : process.env.DB_HOST,
        port : parseInt(process.env.DB_PORT),
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },

    port : process.env.PORT
}

