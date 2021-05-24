import { Component, Input, OnInit } from '@angular/core';

/**
 * Import Models
 */
import { LinkButtonsModel } from 'src/app/models/link-buttons.model';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

  @Input() linkButtonModel: LinkButtonsModel;

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
