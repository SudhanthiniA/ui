import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd9bProductionsummaryRoutingModule } from './pd9b-productionsummary-routing.module';
import { Pd9bProductionsummaryComponent } from './pd9b-productionsummary.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddeditPd9bComponent } from './addedit-pd9b/addedit-pd9b.component';
import { ViewPd9bComponent } from './view-pd9b/view-pd9b.component';


@NgModule({
  declarations: [Pd9bProductionsummaryComponent, AddeditPd9bComponent,  ViewPd9bComponent],
  imports: [
    CommonModule,
    Pd9bProductionsummaryRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Pd9bProductionsummaryModule { }
