import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { Clb11RoutingModule } from './clb11-routing.module';
import { Clb11Component } from './clb11.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';
import { EditComponent } from './edit/edit.component';
import { AckComponent } from './ack/ack.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, Clb11Component, DraftfinallistComponent, EditComponent, AckComponent],
  imports: [
    CommonModule,
    Clb11RoutingModule,
    SharedModule
  ]
})
export class Clb11Module { }
