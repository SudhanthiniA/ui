import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import {RetailrenewalRoutingModule} from './retailrenewal-routing.module';
import { RetailrenewalComponent } from './retailrenewal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RetailrenewalComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    RetailrenewalRoutingModule,
    SharedModule
  ]
})
export class RetailrenewalModule { }
