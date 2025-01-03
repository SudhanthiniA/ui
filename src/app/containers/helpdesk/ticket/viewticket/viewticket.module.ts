import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ViewticketRoutingModule } from './viewticket-routing.module';
import { ViewticketComponent } from './viewticket.component';

import { ViewticketdetailsComponent } from './viewticketdetails/viewticketdetails.component';
 



@NgModule({
  declarations: [ViewticketdetailsComponent, ViewticketComponent],
  imports: [
    CommonModule,
    ViewticketRoutingModule,
    SharedModule
    
  ]
})
export class ViewticketModule { }
