import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd26IdComponent } from './pd26-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Pd26IdRoutingModule } from './pd26-id-routing.module';



@NgModule({
  declarations: [Pd26IdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd26IdRoutingModule
  ]
})
export class Pd26IdModule { }
