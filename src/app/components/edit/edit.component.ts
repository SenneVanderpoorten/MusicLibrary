import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Track } from '../../Track';
import { TrackService } from '../../track.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  track: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private trackservice: TrackService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             track_name: ['', Validators.required ],
              artist_name: ['', Validators.required ]
         });
      }

    updateTrack(track_name, artist_name) {
      this.route.params.subscribe(params => {
          this.trackservice.updateTrack(track_name, artist_name, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.trackservice.editTrack(params['id']).subscribe(res => {
          this.track = res;
      });
    });
  }
}
