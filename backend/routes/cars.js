const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   GET api/cars
// @desc    Get all cars (with filters and search)
router.get('/', async (req, res) => {
  try {
    const { search, brand, fuelType, minPrice, maxPrice, sort } = req.query;
    
    let query = {};
    
    if (search) {
      query.$or = [
        { brand: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } }
      ];
    }
    if (brand) query.brand = brand;
    if (fuelType) query.fuelType = fuelType;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let sortObj = { createdAt: -1 };
    if (sort === 'price_asc') sortObj = { price: 1 };
    if (sort === 'price_desc') sortObj = { price: -1 };

    const cars = await Car.find(query).sort(sortObj).populate('seller', 'name email');
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/cars/:id
// @desc    Get car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('seller', 'name email');
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ message: 'Car not found' });
    res.status(500).send('Server Error');
  }
});

// @route   POST api/cars
// @desc    Add a new car listing (Protected)
router.post('/', auth, async (req, res) => {
  try {
    const newCar = new Car({
      ...req.body,
      seller: req.user.id
    });
    const car = await newCar.save();
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/cars/:id
// @desc    Update a car listing (Protected)
router.put('/:id', auth, async (req, res) => {
  try {
    let car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });

    // Make sure user owns car
    if (car.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    car = await Car.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/cars/:id
// @desc    Delete a car listing (Protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });

    if (car.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await car.deleteOne();
    res.json({ message: 'Car removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/cars/:id/save
// @desc    Save/Unsave car for user
router.post('/:id/save', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const carId = req.params.id;
        
        const index = user.savedCars.indexOf(carId);
        if (index > -1) {
            user.savedCars.splice(index, 1); // Unsave
        } else {
            user.savedCars.push(carId); // Save
        }
        await user.save();
        res.json(user.savedCars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/cars/user/saved
// @desc    Get logged in user's saved cars
router.get('/user/saved', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('savedCars');
        res.json(user.savedCars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
