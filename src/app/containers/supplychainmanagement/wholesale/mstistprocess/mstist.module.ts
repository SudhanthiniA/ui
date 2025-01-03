import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MstistRoutingModule } from './mstist-routing.module';
import { MstistComponent } from './mstist.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MstistComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistRoutingModule
  ]
})
export class MstistModule { }
