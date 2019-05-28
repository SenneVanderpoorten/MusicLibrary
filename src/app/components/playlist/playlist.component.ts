import { Component, OnInit } from '@angular/core';
import { Track } from '../../Track';
import { PlayListService } from 'src/app/playList.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  tracks: Track[];
  
  constructor(private playListService: PlayListService) { }

  ngOnInit() {
    this.playListService
      .getTracks()
      .subscribe((data: Track[]) => {
      this.tracks = data;
    });
  }
}
