import * as express from 'express';
import { saveApplication } from "./apps-data";
import Application from "./application";

const router = express.Router();

router.get('/', (req, res) => {
    res.send([{
        name: 'app1',
        description: 'app description'
    }]);
});

router.post('/', (req, res) => {

    const application = req.body as Application;

    saveApplication(application)
        .then((app) => {
            res.send([{
                name: 'app1',
                description: 'app description'
            }]);
        })
        .catch((err) => res.status(500).send('Error saving application'));
    
        
});

export default router;