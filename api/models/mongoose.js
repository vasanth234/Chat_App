// mongoose.js or app.js (main application file)

require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
