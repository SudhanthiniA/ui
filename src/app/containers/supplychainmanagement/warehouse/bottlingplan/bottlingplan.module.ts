import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottlingplanRoutingModule } from './bottlingplan-routing.module';
import { BottlingplanComponent } from './bottlingplan.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddeditbottlingplanComponent } from './addeditbottlingplan/addeditbottlingplan.component';
import { ViewbottlingplanComponent } from './viewbottlingplan/viewbottlingplan.component';


@NgModule({
  declarations: [BottlingplanComponent, AddeditbottlingplanComponent, ViewbottlingplanComponent],
  imports: [
    CommonModule,
    BottlingplanRoutingModule,
    SharedModule
  ]
})
export class BottlingplanModule { }
