import * as express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{
        name: 'app1',
        description: 'app description'
    }]);
});

export default router;