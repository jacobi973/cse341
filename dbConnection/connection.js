const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    mongoose.connect("mongodb+srv://jacobi_cse341:W8BHr26bitmyYoDd@cluster0.dpcdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('db connected');
}

module.exports = connectDB;