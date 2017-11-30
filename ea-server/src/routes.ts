import { Express } from 'express';

import appsRoutes from "./apps/apps-routes";

function registerRoutes(app: Express) {
    app.use('/apps', appsRoutes);
}

export default registerRoutes;