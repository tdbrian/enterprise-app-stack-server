import { Express } from 'express';
import appsRoutes from './endpoints/apps';

function registerRoutes(app: Express) {
    app.use('/api/v1/apps', appsRoutes);
}

export default registerRoutes;