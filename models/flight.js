const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight
