const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongoURL = 'mongodb://your_username:your_password411416@cluster-1175.my-mongo.com';
mongooose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
app.listen(3300, () => {
    console.log('Server is upand running on port 3300');
});