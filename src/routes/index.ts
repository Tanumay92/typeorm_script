import * as express from 'express';

import * as apiRoutes from '../modules';

import { router } from '../modules';

export let route = express.Router().use('/api',router);


