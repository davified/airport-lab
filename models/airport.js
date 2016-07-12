const mongoose = require('mongoose')
const Terminal = require('./terminal')

const airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminals: [Terminal.schema],
  opened: Date
})

const Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport
