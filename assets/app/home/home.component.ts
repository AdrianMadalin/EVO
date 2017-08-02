import {Component, OnInit} from '@angular/core';
import {Image} from '../shared/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
// images: Image[];

ngOnInit() {
  // this.images = [
  //   { "title": "Image 1", "url": "/images/DSCN8710.JPG" },
  //   { "title": "Image 2", "url": "/images/DSCN8712.JPG" },
  //   { "title": "Image 3", "url": "/images/DSCN8715.JPG" }
  // ];
}
}
