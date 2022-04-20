import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  image1Src ="assets/carousel-1.jpg";
  image2Src ="assets/carousel-2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
