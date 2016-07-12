const mongoose = require('mongoose')
const Flight = require('./flight')

const terminalSchema = new mongoose.Schema({
  name: String,
  flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
  capacity: Number
})

const Terminal = mongoose.model('Terminal', terminalSchema)

module.exports = Terminal
