import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module'; 
import { AddsupplytypeComponent } from './addsupplytype/addsupplytype.component';
import { ViewsupplytypeComponent } from './viewsupplytype/viewsupplytype.component';
import { SupplytypeComponent } from './supplytype.component';
import { SupplytypeRoutingModule } from './supplytype-routing.module';

@NgModule({
  declarations: [
    SupplytypeComponent,
    AddsupplytypeComponent,
    ViewsupplytypeComponent
  ],
  imports: [
    CommonModule,
    SupplytypeRoutingModule,
    SharedModule
  ]
})

export class SupplytypeModule { }

  

