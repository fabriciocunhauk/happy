import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageControllers from './controllers/OrfanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageControllers.index);
routes.get('/orphanages/:id', OrphanageControllers.show);
routes.post('/orphanages', upload.array('images'), OrphanageControllers.create);

export default routes;