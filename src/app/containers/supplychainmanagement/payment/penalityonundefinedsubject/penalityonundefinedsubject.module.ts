import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PenalityonundefinedsubjectRoutingModule } from './penalityonundefinedsubject-routing.module';
import { PenalityonundefinedsubjectComponent } from './penalityonundefinedsubject.component';
import { AddpenalityonundefinedsubjectComponent } from './addpenalityonundefinedsubject/addpenalityonundefinedsubject.component';
import { ViewpenalityonundefinedsubjectComponent } from './viewpenalityonundefinedsubject/viewpenalityonundefinedsubject.component';
import { EditpenalityonundefinedsubjectComponent } from './editpenalityonundefinedsubject/editpenalityonundefinedsubject.component';

@NgModule({
  declarations: [PenalityonundefinedsubjectComponent, AddpenalityonundefinedsubjectComponent, ViewpenalityonundefinedsubjectComponent, EditpenalityonundefinedsubjectComponent],
  imports: [
    CommonModule,
    PenalityonundefinedsubjectRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PenalityonundefinedsubjectModule { }
