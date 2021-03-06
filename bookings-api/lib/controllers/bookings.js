const { Router } = require('express');
const verifyToken = require('../utils/verify-token');

const Booking = require('../models/Booking');
const Place = require('../models/Place');

module.exports = Router()
  .post('/create', verifyToken, async (req, res, next) => {
    try {
      const start_date = new Date(req.body.start_date);
      const end_date = new Date(req.body.end_date);

      if (start_date > end_date) {
        throw new Error('Start date must be before the end date');
      }

      const total_nights = Math.round(
        (end_date - start_date) / (1000 * 60 * 60 * 24)
      );
      const place = await Place.findOne({ _id: req.body.place_id }).exec();

      const existing_bookings = await Booking.find({
        place_id: place._id,
        start_date: { $lt: end_date },
        end_date: { $gt: start_date },
      }).exec();

      if (existing_bookings.length) {
        throw new Error(`${place.name} is already booked for that night`);
      }

      const booking = await Booking.create({
        user_id: req.user.id,
        place_id: place._id,
        start_date: start_date,
        end_date: end_date,
        state: 'reserved',
        total_price: place.price_per_night * total_nights,
      });

      res.json(booking);
    } catch (err) {
      next(err);
    }
  })
  .get('/', verifyToken, async (req, res, next) => {
    const bookings = await Booking.find({ user_id: req.user.id }).exec();
    res.json(bookings);
  })
  .get('/:id', verifyToken, async (req, res, next) => {
    const booking = await Booking.findOne({ _id: req.params.id }).exec();
    res.send(booking);
  })
  .put('/:id', verifyToken, async (req, res, next) => {
    res.send('Updated');
  })
  .delete('/:id', verifyToken, async (req, res, next) => {
    res.send('Cancelled');
  })
