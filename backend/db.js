const express = require('express');
const router = express.Router();
const monk = require('monk');

require('dotenv').config();

const db = monk(process.env.ATLAS_URI);
const requests = db.get('requests');
requests.createIndex('ip');

router.use(express.json())

router.get('/', (req, res) => {
    res.json({ time: new Date() })
});

router.post( '/', async (req, res, next) => {
    const newRequest = { time: new Date() }
    const created = await requests.insert(newRequest)
    res.json(created)
}); 

module.exports = router;