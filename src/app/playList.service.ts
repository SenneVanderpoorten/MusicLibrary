import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './Track';
import { TrackService } from './track.service';

@Injectable({
    providedIn: 'root'
  })
  export class PlayListService {

    uri = 'http://localhost:4000/songsList';

    constructor(private http: HttpClient, public trackService: TrackService) { }
  
    addTrack(track: Track) {
      //todo
      
      
         
    }
    getTracks() {
      return this
             .http
             .get(`${this.uri}`);
    }

}
