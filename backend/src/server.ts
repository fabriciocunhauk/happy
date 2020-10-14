import express from 'express';

import './database/connection';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3333, () => {
    console.log('connected on port 3333');
});