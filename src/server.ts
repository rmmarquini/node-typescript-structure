import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Just a initializer!' });
});

app.listen(3333);