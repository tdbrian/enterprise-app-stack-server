import * as express from 'express';
import { getAppsCollection } from '../db';
import * as _ from 'lodash';
import { ObjectID } from "mongodb";
import { Application, validateApplication } from './application';
import { httpStatusCodes } from '../http-status-codes';
import { DateTime } from 'luxon';

const router = express.Router();

router.get('/', (req, res) => {
    getAppsCollection().find<Application>({}).toArray().then(
        apps => res.send(apps),
        err => res.status(httpStatusCodes.error).send('Error getting apps list')
    );
});

router.get('/:id', ({ params }, res) => {
    if (!params.id) return res.status(httpStatusCodes.invalidInput).send('App name is required');
    let _id = new ObjectID(params.id);
    getAppsCollection().findOne<Application>({ _id }).then(
        app => {
            if (!app) return res.status(httpStatusCodes.invalidInput).send('App not found');
            res.send(app);
        },
        err => res.status(httpStatusCodes.error).send('Error getting apps list')
    );
});

router.post('/', ({ body }, res) => {
    let app = body as Application;
    app.deleted = false;
    app.createdDate = DateTime.utc().toString();
    app.createdBy = 'Thomas Brian';
    const validationErrors = validateApplication(body);
    if (validationErrors.length > 0) return res.status(httpStatusCodes.invalidInput).send(validationErrors);
    getAppsCollection().insertOne(body).then(
        app => res.send(app),
        err => res.status(httpStatusCodes.error).send('Error saving application')
    );
});

router.patch('/:id', ({ body, params }, res) => {
    if (!params.id) return res.status(httpStatusCodes.invalidInput).send('App name is required');
    let _id = new ObjectID(params.id);
    const validationErrors = validateApplication(body);
    if (validationErrors.length > 0) return res.status(httpStatusCodes.invalidInput).send(validationErrors);
    getAppsCollection().findOneAndUpdate({ _id }, body, { upsert: true, returnOriginal: false }).then(
        app => res.send(app.value),
        err => res.status(httpStatusCodes.error).send('Error updating application')
    );
});

router.delete('/:id', ({ params }, res) => {
    if (!params.id) return res.status(httpStatusCodes.invalidInput).send('App name is required');
    let _id = new ObjectID(params.id);
    getAppsCollection().findOneAndUpdate({ _id }, { $set: { deleted: true } }, { returnOriginal: false }).then(
        apps => res.send(apps.value),
        err => res.status(httpStatusCodes.error).send('Error getting apps list')
    );
});

export default router;