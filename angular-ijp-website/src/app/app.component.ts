import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

interface MenuRoute {
  route: string;
  displayName: string;
  sectionId?: string; // Add optional sectionId for scrolling
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isDesktopDevice: boolean;

  menuRoutes: MenuRoute[] = [
    {
      route: "/",
      displayName: "About",
      sectionId: "about-section"
    },
    {
      route: "/projects",
      displayName: "Projects",
      sectionId: "projects-section"
    },
    {
      route: "/contact",
      displayName: "Contact",
      sectionId: "contact-section"
    }
  ];

  constructor(private router: Router) {
    // Check if the user is on a desktop or mobile device
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    this.isDesktopDevice = !regexp.test(details);
  }

  title = 'I.J.P.';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  navigateOrScroll(route: MenuRoute): void {
    if (route.sectionId) {
      this.scrollToSection(route.sectionId);
    } else {
      this.router.navigate([route.route]);
    }
    if (this.drawer) {
      this.drawer.close(); // Close drawer if on mobile
    }
  }
}
