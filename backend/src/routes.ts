import { Router } from 'express';

import OrphanageControllers from './controllers/OrfanagesController';

const routes = Router();

routes.get('/orphanages', OrphanageControllers.index);
routes.post('/orphanages', OrphanageControllers.create);

export default routes;