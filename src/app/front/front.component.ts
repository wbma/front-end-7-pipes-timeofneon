import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  printOut: string;
  mediaFiles: any;

  constructor(public mediaService: MediaService, private router: Router) {
  }

  ngOnInit() {
    /* if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigate(['login']);
      });
    } else {
      this.router.navigate(['login']);
    } */

    this.printOut = this.mediaService.test;

    this.mediaService.getMediaFiles(0, 10).subscribe(result => {
      this.mediaFiles = result;
    }, err => {
      console.log(err);
    });
  }
}
