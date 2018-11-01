const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

// module.export = {
//   mongoose: mongoose
// };

module.export = {mongoose};