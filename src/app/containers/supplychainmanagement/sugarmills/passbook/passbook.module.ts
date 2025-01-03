import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassbookRoutingModule } from './passbook-routing.module';
import { PassbookComponent } from './passbook.component';
import { AddeditpassbookComponent } from './addeditpassbook/addeditpassbook.component';
import { ViewpassbookComponent } from './viewpassbook/viewpassbook.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PassbookComponent, AddeditpassbookComponent, ViewpassbookComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,

    PassbookRoutingModule
  ]
})
export class PassbookModule { }
