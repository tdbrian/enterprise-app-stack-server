import * as express from 'express';
import { saveApplication } from './apps-data';
import { Application, validateApplication, httpStatusCodes } from 'ea-shared';

const router = express.Router();

router.get('/', (req, res) => {
    const apps = [{
        name: 'app1',
        description: 'app description'
    }];
    res.send(apps);
});

router.get('/:appId', (req, res) => {
    const apps = {
        name: 'app1',
        description: 'app description'
    };
    res.send(apps);
});

router.post('/', (req, res) => {
    const application = req.body as Application;
    const validationErrors = validateApplication(application);
    if (validationErrors) return res.status(httpStatusCodes.invalidInput).send(validationErrors)

    saveApplication(application).then(
        app => res.send(app),
        err => res.status(httpStatusCodes.error).send('Error saving application')
    );
});

export default router;