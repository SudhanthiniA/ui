import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { FineforretailRoutingModule } from './fineforretailer-routing.module';
import { FineforretailerComponent } from './fineforretailer.component';
import { AddfineforretailComponent } from './addfineforretail/addfineforretail.component';
import { DeologinComponent } from './deologin/deologin.component';

import { DeoeditComponent } from './deoedit/deoedit.component';


@NgModule({
  declarations: [FineforretailerComponent, AddfineforretailComponent,DeologinComponent,DeoeditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FineforretailRoutingModule
  ]
})
export class FineforretailModule { }
