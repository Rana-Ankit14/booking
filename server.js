const express = require('express');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/login', (req, res) => {

    console.log(req.body.email);
    res.sendStatus(200);
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server up and running....');
})