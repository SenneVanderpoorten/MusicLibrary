import { Component, OnInit } from '@angular/core';
import { Track } from '../../Track';
import { TrackService } from '../../track.service';
import {PlayListService} from '../../PlayList.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tracks: Track[];

  constructor(private trackservice: TrackService, private playlistService: PlayListService) { }

  deleteTrack(id) {
    this.trackservice.deleteTrack(id).subscribe(res => {
      console.log('Deleted');
    });
  }
  AddToPlayList(id){
    
    this.playlistService.addTrack(this.trackservice.getTrack(id));
  }

  ngOnInit() {
    this.trackservice
      .getTracks()
      .subscribe((data: Track[]) => {
      this.tracks = data;
    });
  }
}
