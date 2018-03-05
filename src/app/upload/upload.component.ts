import {Component, OnInit} from '@angular/core';
import {Media} from '../interfaces/media';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fm: FormData = new FormData();
  file: File;
  media: Media = {
    title: '',
    description: '',
  };

  constructor(public mediaService: MediaService) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    this.fm.append('file', this.file);
    this.fm.append('title', this.media.title);
    this.fm.append('description', this.media.description);
    this.mediaService.uploadFormData(this.fm).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
