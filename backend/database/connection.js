const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const url = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myapp';

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

module.exports = mongoose;