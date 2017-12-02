import { MongoClient, Db } from 'mongodb';

export let db: Db;

const dbName = 'applicationServerStack';
const url = `mongodb://localhost:38611/${dbName}`;

export const connectPromise = MongoClient.connect(url);
connectPromise
    .then(_db => {
        console.log(`Connected successfully to mongodb ${dbName}`);
        this.Db = _db;
    })
    .catch(error => console.error(error));

export const getAppsCollection = () =>  db.collection('applications');