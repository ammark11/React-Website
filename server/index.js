const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DBCONNECM_STRING = 'placeholder-for-your-mongodb-connection-string';
mongoose.connect(DBCONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to DB successfully!'))
	.catch((err) => console.error('Error connecting to DB:', err));
app.get('/', (req, res) => {
  res.send('Hello from React-Website backend!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});