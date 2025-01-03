import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VintineryretailComponent } from './vintineryretail.component';
import { VintineryretailRoutingModule } from './vintineryretail-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [VintineryretailComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    VintineryretailRoutingModule,
  ]
})
export class VintineryretailModule { }
