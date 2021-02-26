const express = require('express')
const app = express()

const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

mongoose.connect(`mongodb://localhost/Quiz`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log('Successfully connected to Database!!');
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port} 🚀`)
})
