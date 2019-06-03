const express = require('express');
const app = express();
const playListRoutes = express.Router();

let Track = require('../models/PlayList');


playListRoutes.route('/add').post(function (req, res) {
    //Todo 
    let track = new Track(req.body);
    

 
});
playListRoutes.route('/').get(function (req, res) {
    Track.find(function (err, tracks){
    if(err){
      console.log(err);
    }
    else {
      res.json(tracks);
    }
  });
});
playListRoutes.route('/delete/:id').get(function (req, res) {
    Track.findByIdAndRemove({_id: req.params.id}, function(err, track){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = playListRoutes;