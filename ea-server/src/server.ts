import * as express from 'express';
import * as bodyParser from 'body-parser';
import registerRoutes from './routes';
import { connectPromise } from './db';

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send({ status: 'Server running' }));

connectPromise.then(() => {
    registerRoutes(app);

    const port = 3001;
    app.listen(port, () => console.info(`Server started at http://localhost:${port}`));
});