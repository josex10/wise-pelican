import { Component, OnInit } from '@angular/core';

/**
 * Import Models
 */

import { LinkButtonsModel } from '../../models/link-buttons.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public groupOfLinkButtons: LinkButtonsModel[] = [];

  constructor() { 
    this.groupOfLinkButtons = [
      {label: 'Home', url: 'landing-page'},
      {label: 'Subscription', url: 'subscription-page'},
    ]
  }

  ngOnInit(): void {
  }

}
