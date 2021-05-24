import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss']
})
export class SubscriptionCardComponent implements OnInit {

  @Input() productModel: ProductModel;

  

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }


  /**
  * @Name openDialog
  * @Paramater N/A
  * @Description Function to call the service to open the dialog
  * @Return void
  */
  openDialog() {
    this.commonService.fnOpenSubscriptionDialog(this.productModel);
  }

}
