const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  user: {
    type: mongoose.SchemaTypes.Mixed,
  },
});

module.exports = mongoose.model('user', UserSchema);
