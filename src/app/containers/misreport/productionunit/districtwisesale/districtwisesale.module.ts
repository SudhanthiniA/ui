import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistrictwisesaleRoutingModule } from './districtwisesale-routing.module';
import { DistrictwisesaleComponent } from './districtwisesale.component';



@NgModule({
  declarations: [DistrictwisesaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistrictwisesaleRoutingModule
  ]
})
export class DistrictwisesaleModule { }
