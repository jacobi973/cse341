const express = require('express');
const connectDB = require('./dbConnection/connection');
const bodyParser = require('body-parser');
const getDocument = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

connectDB();
app.use(express.json({
    extensions: false
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', require('./routes/index'))