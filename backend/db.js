const express = require('express');
const router = express.Router();
const monk = require('monk');

require('dotenv').config();

const db = monk(process.env.ATLAS_URI);
const requests = db.get('requestTimes');
requests.createIndex(['time', 'ip']);

router.use(express.json())

router.get('/', (req, res) => {
    const results = requests.find({}).then((docs) => {})
    res.json({ time: new Date() })
});

router.post( '/', async (req, res, next) => {
    const newRequest = { time: new Date(), 
        ip: (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress }
    const created = await requests.insert(newRequest)
}); 

module.exports = router;