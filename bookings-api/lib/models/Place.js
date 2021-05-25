/*
name: string
slug: string
description: string
location: string
price_per_night: decimal
image: string
image_thumbnail: string
max_guests: integer
pet_friendly: boolean
pool: boolean
wifi: boolean
created_at: datetime
updated_at: datetime

has_many: bookings
has_many: reviews
*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    description: String,
    location: String,
    price_per_night: Number,
    image: String,
    image_thumbnail: String,
    max_guests: Number,
    pet_friendly: Boolean,
    pool: Boolean,
    wifi: Boolean,
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        const id = ret._id;
        delete ret._id;
        return { id, ...ret };
      },
    },
  }
);

const Place = mongoose.model('Place', schema);

module.exports = Place;
