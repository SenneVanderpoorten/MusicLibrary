// track.route.js

const express = require('express');
const app = express();
const trackRoutes = express.Router();

// Require Track model in our routes module
let Track = require('../models/Track');

// Defined store route
trackRoutes.route('/add').post(function (req, res) {
  let track = new Track(req.body);
  track.save()
    .then(game => {
    res.status(200).json({'track': 'Track added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
trackRoutes.route('/').get(function (req, res) {
    Track.find(function (err, tracks){
    if(err){
      console.log(err);
    }
    else {
      res.json(tracks);
    }
  });
});

// Defined edit route
trackRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Track.findById(id, function (err, track){
      res.json(track);
  });
});

//  Defined update route
trackRoutes.route('/update/:id').post(function (req, res) {
    Track.findById(req.params.id, function(err, track) {
    if (!track)
      return next(new Error('Could not load Document'));
    else {
        track.track_name = req.body.track_name;
        track.artist_name = req.body.artist_name;

        track.save().then(track => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
trackRoutes.route('/delete/:id').get(function (req, res) {
    Track.findByIdAndRemove({_id: req.params.id}, function(err, track){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = trackRoutes;