const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Track = new Schema({
    track_name: {
      type: String
    }
    ,artist_name: {
      type : String
    }
  },{
      collection: 'playlist'
  });
  
  module.exports = mongoose.model('PlayList', Track);