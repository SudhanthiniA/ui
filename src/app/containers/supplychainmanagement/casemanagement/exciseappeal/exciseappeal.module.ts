import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExciseappealRoutingModule } from './exciseappeal-routing.module';
import { ExciseappealComponent } from '../exciseappeal/exciseappeal.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ExciseappealComponent,
    AddComponent,
    ViewComponent,
    EditComponent,],
  imports: [
    CommonModule,
    SharedModule,
    ExciseappealRoutingModule
  ]
})
export class ExciseappealModule { }
