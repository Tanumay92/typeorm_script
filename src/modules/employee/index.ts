import * as express from 'express';
import * as empCtrl from './employee.ctrl';

export let router = express.Router();

router.post('/adduser');