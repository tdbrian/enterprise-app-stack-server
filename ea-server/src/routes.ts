import { Express } from 'express';

import appsRoutes from "./apps/apps-routes";

function registerRoutes(app: Express) {
    app.use('/api/v1/apps', appsRoutes);
}

export default registerRoutes;