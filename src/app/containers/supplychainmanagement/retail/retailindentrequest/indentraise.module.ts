import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndentraiseRoutingModule } from './indentraise-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    IndentraiseRoutingModule,
    SharedModule
  ]
})
export class IndentraiseModule { }
