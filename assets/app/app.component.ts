import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App Evo';
  data = [1,2,3,4];
  bind = '';
}
