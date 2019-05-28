import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './Track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  uri = 'http://localhost:4000/tracks';

  constructor(private http: HttpClient) { }

  addTrack(track_name, artist_name) {
    const obj = {
      track_name: track_name,
      artist_name: artist_name
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  
  getTrack(id){
    return this.http.get(`${this.uri}/${id}`);
  }

  getTracks() {
    return this
           .http
           .get(`${this.uri}`);
}
  

editTrack(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateTrack(track_name, artist_name, id) {

  const obj = {
    track_name: track_name,
    artist_name: artist_name
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

  deleteTrack(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
