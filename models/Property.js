const mongoose = require('mongoose');
const { Schema } = mongoose;

const PropertySchema = new Schema({
  title: {
    type: String,
  },
  propertyType: {
    type: String,
  },
  address: {
    lineOne: {
      type: String,
    },
    lineTwo: {
      type: String,
    },
    city: {
      type: String,
    },
    postcode: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ownedBy: {
    type: String,
  },
});

module.exports = mongoose.model('property', PropertySchema);
