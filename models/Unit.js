const mongoose = require('mongoose');
const { Schema } = mongoose;

const UnitSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  numberOfTenants: {
    type: Number,
    required: true
  },
  currentlyOccupied: {
    type: Boolean,
    required: true
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'property'
  }
});

module.exports = mongoose.model('unit', UnitSchema);