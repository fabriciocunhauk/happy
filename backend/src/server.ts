import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(3333, () => {
    console.log('conected on port 3333');
});