import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionDialogComponent } from '../subscription/subscription-dialog/subscription-dialog.component';
import { ProductModel } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl: string = 'https://product-subscription.herokuapp.com/api';

  constructor(private dialog: MatDialog) { }


  /**
  * @Name fnGetApiUrl
  * @Paramater N/A
  * @Description Function to get the API url
  * @Return string
  */
  public fnGetApiUrl(): string{
    return this.apiUrl;
  }


  /**
  * @Name fnOpenSubscriptionDialog
  * @Paramater N/A
  * @Description Function to open the Subscription Dialog
  * @Return void
  */
  public fnOpenSubscriptionDialog(product: ProductModel): void{
    const dialogRef = this.dialog.open(SubscriptionDialogComponent, {
      data: product
    });
  }

  
}
