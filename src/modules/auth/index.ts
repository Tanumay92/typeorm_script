import * as express from 'express';
import * as authCtrl from './auth.ctrl';

export let router = express.Router();

router.post('/login',authCtrl.login);

