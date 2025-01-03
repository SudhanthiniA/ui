import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  LiquordispatchfeesRoutingModule } from './liquordispatchfees-routing.module';
import {  LiquordispatchfeesComponent } from './liquordispatchfees.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [ LiquordispatchfeesComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
     LiquordispatchfeesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class LiquordispatchfeesModule { }
