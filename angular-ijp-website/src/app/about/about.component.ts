import { Component, OnInit } from '@angular/core';

// TESTS COMMIT BRUH

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  
  // FUTURE - Only load page until images are loaded
  portraitLoaded() {
    console.log("Hello, world!")
  }
}
