import * as express from 'express';
import * as auth from './auth';


export let router = express.Router();

router.use('/auth',auth.router);