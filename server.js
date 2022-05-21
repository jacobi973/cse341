const express = require('express');
const connectDB = require('./dbConnection/connection');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use(express.json({
    extensions: false
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', require('./routes/index'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log(`Running on port ${port}`)
});

connectDB();
