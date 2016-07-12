const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
mongoose.connect('mongodb://default:defaultpassword@ds011810.mlab.com:11810/airport-lab-david')

const Airport = require('./models/airport')
const Terminal = require('./models/terminal')
const Flight = require('./models/flight')
const Passenger = require('./models/passenger')

let flight1 = new Flight({
  from: 'CDG France',
  to: 'JFK New-York USA',
  airline: 'American Airlines'
})

flight1.save((err) => {
  if (err) console.log(err)
  console.log('flight saved. Details: ', flight1)
})

let flight2 = new Flight({
  from: 'Heathrow UK',
  to: 'JFK New-York USA',
  airline: 'British Airways'
})

flight2.save((err) => {
  if (err) console.log(err)
  console.log('flight saved. Details: ', flight2)
})

let jfk = new Airport({
  name: 'JFK',
  country: 'USA'
})

jfk.save((err) => {
  if (err) console.log(err)
  console.log('jfk airport created:', jfk)
})

let terminal1 = new Terminal({
  name: 'Terminal 1',
  flights: [flight1, flight2],
  capacity: 234324
})

terminal1.save((err) => {
  if (err) console.log(err)
  console.log('terminal1 created:', terminal1)
})

// An airport called "JFK" in the USA opened on a random date in 1990.
// A terminal called "Terminal 1" pushed to airport1 with a capacity of 234324 and two flights: flight1 and flight2

app.listen(port, function () {
	console.log(`express has started on port ${port}`)
})
