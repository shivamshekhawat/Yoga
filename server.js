const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yoga_booking_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const yogaClassSchema = new mongoose.Schema({
  teacher: String,
  classType: String,
  description: String,
  date: Date,
  time: String,
  duration: String,
  capacity: Number,
});
const YogaClass = mongoose.model('YogaClass', yogaClassSchema);


app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
