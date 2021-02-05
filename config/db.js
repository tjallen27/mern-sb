const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {

    // Connect to database
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected...');
  } catch (error) {

    // Exit process
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
