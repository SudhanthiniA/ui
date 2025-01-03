import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { Stockactivity2RoutingModule } from './stockactivity2-routing.module';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Stockactivity2RoutingModule,
    SharedModule
  ]
})
export class Stockactivity2Module { }
