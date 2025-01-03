import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DynamicroutingmapComponent } from './dynamicroutingmap.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DynamicroutingmapRoutingModule } from './dynamicroutingmap-routing.module';


@NgModule({
  declarations: [DynamicroutingmapComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DynamicroutingmapRoutingModule
  ]
})
export class DynamicroutingmapModule { }
