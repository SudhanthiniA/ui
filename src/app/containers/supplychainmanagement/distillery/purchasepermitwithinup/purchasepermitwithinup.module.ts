import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

// import { PurchasepermitwithinupRoutingModule } from './Purchasepermitwithinup-routing.module';

import { PurchasepermitwithinupComponent } from './purchasepermitwithinup.component';
import { AddpurchasepermitwithinupComponent } from './addpurchasepermitwithinup/addpurchasepermitwithinup.component';
import { ViewpurchasepermitwithinupComponent } from './viewpurchasepermitwithinup/viewpurchasepermitwithinup.component';
import { SellerlistscreenComponent } from './sellerlistscreen/sellerlistscreen.component';
import { SellerviewscreenComponent } from './sellerviewscreen/sellerviewscreen.component';
@NgModule({
  declarations: [
    PurchasepermitwithinupComponent,
    AddpurchasepermitwithinupComponent,
    ViewpurchasepermitwithinupComponent,
    SellerlistscreenComponent,
    SellerviewscreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // PurchasepermitwithinupRoutingModule
  ]
})
export class PurchasepermitwithinupModule { }
