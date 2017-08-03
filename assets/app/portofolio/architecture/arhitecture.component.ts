import {Component} from "@angular/core";
@Component({
  selector: 'app-arhitecture',
  templateUrl: './arhitecture.component.html',
  styleUrls: ['./arhitecture.component.css']
})

export class ArhitectureComponent {
  images = [
    { name: 'e1', path: '/images/arhitectura/e1.jpg' },
    { name: 'e2', path: '/images/arhitectura/e2.jpg' },
    { name: 'e3', path: '/images/arhitectura/e3.jpg' },
    { name: 'p1', path: '/images/arhitectura/p1.jpg' },
    { name: 'p2', path: '/images/arhitectura/p2.jpg' },
    { name: 'p3', path: '/images/arhitectura/p3.jpg' },
  ];
}
