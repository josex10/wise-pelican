import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { ProductModel } from '../../models/product.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {

  public groupOfProducts: ProductModel[] = [];
  public breakpoint: number;
  public loader: boolean = true;

  constructor(private serverService: ServerService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    try {
      this.serverService.fnGetAllProducts().subscribe(resp=>{
        this.groupOfProducts = resp;
        this.loader = false;
      }, error=>{
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * @Name onResize
  * @Paramater event
  * @Description Function to convert the Angular Material Grid responsive
  * @Return void
  */
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 4;
  }


}
