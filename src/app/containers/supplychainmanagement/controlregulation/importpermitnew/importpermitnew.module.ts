import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitnewRoutingModule } from './importpermitnew-routing.module';
import { ImportpermitnewComponent } from './importpermitnew.component';
import { AddimportpermitnewComponent } from './addimportpermitnew/addimportpermitnew.component';
import { ViewimportpermitnewComponent } from './viewimportpermitnew/viewimportpermitnew.component';
import { ImportpermitsuccessComponent } from './importpermitsuccess/importpermitsuccess.component';
import { PaymentComponent } from './payment/payment.component';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  declarations: [ImportpermitnewComponent, AddimportpermitnewComponent, ViewimportpermitnewComponent, ImportpermitsuccessComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitnewRoutingModule,
    AutocompleteLibModule
  ]
})
export class ImportpermitnewModule { }
