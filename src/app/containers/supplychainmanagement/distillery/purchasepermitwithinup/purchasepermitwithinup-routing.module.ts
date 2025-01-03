import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasepermitwithinupComponent } from './purchasepermitwithinup.component';
import { AddpurchasepermitwithinupComponent } from './addpurchasepermitwithinup/addpurchasepermitwithinup.component';
import { ViewpurchasepermitwithinupComponent } from './viewpurchasepermitwithinup/viewpurchasepermitwithinup.component';
import { SellerlistscreenComponent } from './sellerlistscreen/sellerlistscreen.component';
import { SellerviewscreenComponent } from './sellerviewscreen/sellerviewscreen.component';

const routes: Routes = [
  { path: 'list', component: PurchasepermitwithinupComponent},
  {path: 'add', component: AddpurchasepermitwithinupComponent},
  {path: 'view', component: ViewpurchasepermitwithinupComponent},
  {path: 'sellerlist', component: SellerlistscreenComponent},
  {path: 'sellerview', component: SellerviewscreenComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasepermitwithinupRoutingModule { }
