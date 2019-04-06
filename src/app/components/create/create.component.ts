import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TrackService } from '../../track.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private trackservice: TrackService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      track_name: ['', Validators.required ],
      artist_name: ['', Validators.required ]
   });
  }

  addTrack(track_name, artist_name) {
    this.trackservice.addTrack(track_name, artist_name);
}
  ngOnInit() {
  }

}
