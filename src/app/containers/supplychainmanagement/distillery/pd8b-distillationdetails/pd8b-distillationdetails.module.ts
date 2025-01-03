import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd8bDistillationdetailsRoutingModule } from './pd8b-distillationdetails-routing.module';
import { Pd8bDistillationdetailsComponent } from './pd8b-distillationdetails.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddeditPd8bComponent } from './addedit-pd8b/addedit-pd8b.component';
import { ViewPd8bComponent } from './view-pd8b/view-pd8b.component';



@NgModule({
  declarations: [Pd8bDistillationdetailsComponent, AddeditPd8bComponent, ViewPd8bComponent],
  imports: [
    CommonModule,
    Pd8bDistillationdetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Pd8bDistillationdetailsModule { }
