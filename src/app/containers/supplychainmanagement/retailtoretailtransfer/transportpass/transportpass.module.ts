import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TransportpassRoutingModule } from './transportpass-routing.module';
import { TransportpassComponent } from './transportpass.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TransportpassComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassRoutingModule
  ]
})
export class TransportpassModule { }
