const express = require('express');
const router = express.Router();

// Import Models
const Property = require('../../models/Property');

// *** PROPERTIES *** //

//  @method   GET
//  @desc     Get all properties
router.get('/', async (req, res) => {
  const { userId } = req.query;
  // Find all properties
  const properties = await Property.find({ ownedBy: userId }).populate('units');
  try {
    // Return error message if no properties found
    if (!properties) {
      return res.status(400).json({ msg: 'Not properties found' });
    }

    // Return properties
    return res.status(200).json(properties);
  } catch (error) {
    // If error, return server error message
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

// @method   GET
// @desc     GET property by ID
router.get('/:id', async (req, res) => {
  // Find property by param ID
  const property = await Property.findById(req.params.id).populate('units');
  try {
    // If no property, return an error
    if (!property) {
      return res.status(400).json({ msg: 'No property found' });
    }

    // Return the property
    return res.status(200).json(property);
  } catch (error) {
    // If error, return error
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

// @method   POST
// @desc     Add a new property
router.post('/', async (req, res) => {
  // Create a new propety object from req.body
  const { title, propertyType, address, userId } = req.body;
  const newProperty = new Property({
    title,
    propertyType,
    address,
    ownedBy: userId,
  });

  try {
    // If no newProperty, throw error
    if (!newProperty) {
      return res.status(400).json({ msg: 'Please check the fields' });
    }

    // Save the new Property
    await newProperty.save();

    // Return the new property
    return res.status(200).json(newProperty);
  } catch (error) {
    // If error, throw error
    console.error(error);
    return res.status(500).send('Server error');
  }
});

// @method   PUT
// @desc     Update property by ID
router.put('/:id', async (req, res) => {
  try {
    // Find property by ID and update
    const property = await Property.findByIdAndUpdate(req.params.id, req.body);

    // Throw error if no property
    if (!property) {
      return res.status(400).json({ msg: 'No property found' });
    }

    // Save updated property
    await property.save();

    // Return updated property
    return res.status(200).json(property);
  } catch (error) {
    // If error, send server error
    return res.status(500).send('Server error');
  }
});

// @method   DELETE
// @desc     Delete property by ID
router.delete('/:id', async (req, res) => {
  // Find property by ID and delete
  const property = await Property.findOneAndDelete({ _id: req.params.id });
  try {
    // Throw error if property doesn't exist
    if (!property) {
      return res.status(400).json({ msg: 'No Property found' });
    }

    // If successful, return success message
    return res.status(200).json({ msg: 'Property deleted' });
  } catch (error) {
    // If error, return error
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
