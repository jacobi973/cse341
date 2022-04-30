const express = require('express');
const connectDB = require('./dbConnection/connection');
const getDocument = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json({extensions: false}));
app.use('/', require('./routes/index'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})