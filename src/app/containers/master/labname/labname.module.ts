import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LabnameRoutingModule } from './labname-routing.module';
import { LabnameComponent } from './labname.component';
import { AddlabnameComponent } from './addlabname/addlabname.component';
import { ViewlabnameComponent } from './viewlabname/viewlabname.component';


@NgModule({
  declarations: [
    LabnameComponent, AddlabnameComponent, ViewlabnameComponent],
  imports: [
    CommonModule,
    SharedModule,
    LabnameRoutingModule
  ]
})
export class LabnameModule { }
