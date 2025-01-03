import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { Ds1RoutingModule } from './ds1-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    Ds1RoutingModule
  ]
})
export class Ds1Module { }
