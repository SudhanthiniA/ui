import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RetailRoutingModule } from './retail-routing.module';
import { RetailComponent } from './retail.component';
import { ViewComponent } from './view/view.component';
import {AddComponent} from './add/add.component'

@NgModule({
  declarations: [RetailComponent , ViewComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailRoutingModule
  ]
})
export class RetailModule { }
