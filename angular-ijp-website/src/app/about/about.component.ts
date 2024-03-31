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
  
  portraitLoaded() {
    console.log("Hello, world!")
  }
}
