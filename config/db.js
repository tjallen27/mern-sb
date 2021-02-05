require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    // Exit process
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
