import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-subscription-dialog',
  templateUrl: './subscription-dialog.component.html',
  styleUrls: ['./subscription-dialog.component.scss']
})
export class SubscriptionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubscriptionDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: ProductModel) { }

  ngOnInit(): void {
  }

}
