import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit() {

 }

  goTo2(location: string): void {
      if(location === 'home') {
        this.router.navigate(['/'], {fragment: 'home'});
      } else if(location === 'services'){
        this.router.navigate(['/'], {fragment: 'services'});
      } else if(location === 'team'){
        this.router.navigate(['/'], {fragment: 'team'});
      }
      window.location.hash = location;
  };

  scrollTo() {
    this.router.navigate(['/']);
  }
}
