import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './Track';

@Injectable({
    providedIn: 'root'
  })
  export class PlayListService {

    uri = 'http://localhost:4000/playlist';

    constructor(private http: HttpClient) { }
  
    addTrack(Track) {
      
      this.http.post(`${this.uri}/add`,Track)
          .subscribe(res => console.log('Done'));
    }
    getTracks() {
      return this
             .http
             .get(`${this.uri}`);
    }

}
