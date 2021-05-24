import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * Import Modules
 */
 import { LandingPageComponent } from './landing/landing-page/landing-page.component';
 import { SubscriptionPageComponent } from './subscription/subscription-page/subscription-page.component';


const routes: Routes = [
  { path: 'landing-page'    , component: LandingPageComponent},
  { path: 'subscription-page'    , component: SubscriptionPageComponent},
  { path: '**', redirectTo: 'landing-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
