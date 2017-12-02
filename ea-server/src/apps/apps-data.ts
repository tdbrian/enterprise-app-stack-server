import { getAppsCollection } from '../db';
import { Application } from 'ea-shared';

export function getAll(): Promise<Application[]> {
    return getAppsCollection().find<Application>({}).toArray();
}

export async function saveApplication(app: Application): Promise<Application> {
    return getAppsCollection()
        .findOneAndUpdate({ name: app.name }, app, { upsert: true, returnOriginal: false })
        .then(app => app.value);
}