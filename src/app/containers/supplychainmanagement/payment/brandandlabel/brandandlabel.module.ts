import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandandlabelRoutingModule } from './brandandlabel-routing.module';
import { BrandandlabelComponent } from './brandandlabel.component';
import { ViewbrandandlabelComponent } from './viewbrandandlabel/viewbrandandlabel.component';
import { AddbrandandlabelComponent } from './addbrandandlabel/addbrandandlabel.component';
import { EditbrandandlabelComponent } from './editbrandandlabel/editbrandandlabel.component';

@NgModule({
  declarations: [BrandandlabelComponent, ViewbrandandlabelComponent, AddbrandandlabelComponent, EditbrandandlabelComponent],
  imports: [
    CommonModule,
    BrandandlabelRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BrandandlabelModule { }
