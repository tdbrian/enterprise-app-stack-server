import { db } from "../db";
import Application from "./application";

const appCollection = db.collection('applications');

export function getAll(): Promise<Application[]> {
    return appCollection.find<Application>({}).toArray();
}

export function saveApplication(app: Application): Promise<Application> {
    return new Promise<Application>((res, rej) => {
        appCollection.findOneAndUpdate({ name: app.name }, app, { upsert: true, returnOriginal: false }, (err, app) => {
            if (err) return rej(err);
            if (!app.ok) return rej(app.lastErrorObject);
            else res(app.value);
        })
    });
}