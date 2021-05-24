import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SubscriptionCardComponent } from './subscription-card/subscription-card.component';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionDialogComponent } from './subscription-dialog/subscription-dialog.component';



@NgModule({
  declarations: [SubscriptionPageComponent, SubscriptionCardComponent, SubscriptionDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule, 
    MatButtonModule,
    SharedModule
  ],
  providers:[]
})
export class SubscriptionModule { }
