import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NewbrandRoutingModule } from './newbrand-routing.module';
import { NewbrandComponent } from './newbrand.component';
import { AddnewbrandComponent } from './addnewbrand/addnewbrand.component';
import { ViewnewbrandComponent } from './viewnewbrand/viewnewbrand.component';

@NgModule({
  declarations: [ AddnewbrandComponent, ViewnewbrandComponent,NewbrandComponent],
  imports: [
    CommonModule,
    NewbrandRoutingModule,
    SharedModule
  ]
})
export class NewbrandModule { }
