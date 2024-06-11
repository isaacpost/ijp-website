import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

interface MenuRoute {
  route: string,
  displayName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDesktopDevice: boolean;

  menuRoutes: MenuRoute[] = [
    {
      route: "/",
      displayName: "About Me!"
    },
    {
      route: "/projects",
      displayName: "Projects"
    },
    {
      route: "/music",
      displayName: "Music"
    },
    {
      route: "/contact",
      displayName: "Contact"
    },
  ]

  constructor() {
    // gets info as to how user navigated to page
    let details = navigator.userAgent; 
      
    let regexp = /android|iphone|kindle|ipad/i; 
  
    // regex test for if any of the devices were on mobile
    this.isDesktopDevice = !regexp.test(details); 
  }

  title = 'I.J.P.';
}
