import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pamr1IdComponent } from './pamr1-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Pamr1IdRoutingModule } from './pamr1-id-routing.module';



@NgModule({
  declarations: [Pamr1IdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pamr1IdRoutingModule
  ]
})
export class Pamr1IdModule { }
