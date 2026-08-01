const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to DB');
  } catch (error) {
    console.error('DB Connection Error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;