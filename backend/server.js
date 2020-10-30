const express = require('express');
const app = express();
const dbRouter = require('./db.js');

app.use('/about', dbRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App is listening in port ${port}`)
});