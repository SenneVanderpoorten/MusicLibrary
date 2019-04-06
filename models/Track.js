// Track.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Tracks
let Track = new Schema({
  track_name: {
    type: String
  },
  artist_name: {
    type: String
  }
},{
    collection: 'tracks'
});

module.exports = mongoose.model('Track', Track);