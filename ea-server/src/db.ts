import { MongoClient, Db } from 'mongodb';

let db: Db;

const dbName = 'applicationServerStack';
var url = `mongodb://localhost:38611/${dbName}`;
export default MongoClient.connect(url)
    .then(_db => { 
        console.log(`Connected successfully to mongodb ${dbName}`);
        this.Db = _db;
    })
    .catch(error => console.error(error));
    