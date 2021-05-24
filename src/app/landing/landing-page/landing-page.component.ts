import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  public mainMessage: string = "Welcome to the Product Subscription Application";
  public subscriptionUrl: string = "subscription-page";
  
  constructor() { }

  ngOnInit(): void {
  }

}
