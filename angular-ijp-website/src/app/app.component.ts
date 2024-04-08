import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDesktopDevice: boolean;

  constructor() {
    let details = navigator.userAgent; 
      
    let regexp = /android|iphone|kindle|ipad/i; 
  
    this.isDesktopDevice = !regexp.test(details); 
  }

  title = 'I.J.P.';
}
