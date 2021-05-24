import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


/**
 * Import Angular Material Modules
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LinkButtonComponent } from './link-button/link-button.component';
import {MatIconModule} from '@angular/material/icon';

import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner';




@NgModule({
  declarations: [NavBarComponent, LinkButtonComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule, 
    MatProgressSpinnerModule
  ], 
  exports: [
    NavBarComponent, 
    LoaderComponent
  ]
})
export class SharedModule { }
