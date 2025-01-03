import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RetailtransferacceptanceRoutingModule } from './retailtransferacceptance-routing.module';
import { RetailtransferacceptanceComponent } from './retailtransferacceptance.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [RetailtransferacceptanceComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferacceptanceRoutingModule

  ]
})
export class RetailtransferacceptanceModule { }
