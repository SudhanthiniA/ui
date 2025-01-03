import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { VigillanceRoutingModule } from './vigillance-routing.module';
import { VigillanceComponent } from './vigillance.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [VigillanceComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    VigillanceRoutingModule
  ]
})
export class VigillanceModule { }
