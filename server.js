require('dotenv').config()
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    res.send('<h4>Hello World</h4>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
    console.log(`${process.env.HOST}`);
});