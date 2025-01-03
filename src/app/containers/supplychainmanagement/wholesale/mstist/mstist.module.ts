import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { MstistRoutingModule } from './mstist-routing.module';
import { MstistComponent } from './mstist.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [MstistComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistRoutingModule
  ]
})
export class MstistModule { }
