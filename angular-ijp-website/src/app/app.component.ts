import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDesktopDevice: boolean;

  constructor() {
    // gets info as to how user navigated to page
    let details = navigator.userAgent; 
      
    let regexp = /android|iphone|kindle|ipad/i; 
  
    // regex test for if any of the devices were on mobile
    this.isDesktopDevice = !regexp.test(details); 
  }

  title = 'I.J.P.';
}
