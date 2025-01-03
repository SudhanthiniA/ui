import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitcancellationRoutingModule } from './importpermitcancellation-routing.module';
import { ImportpermitcancellationComponent } from './importpermitcancellation.component';
import { ViewimportpermitnewupComponent } from './viewimportpermitnewup/viewimportpermitnewup.component';

@NgModule({
  declarations: [ImportpermitcancellationComponent,ViewimportpermitnewupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitcancellationRoutingModule,
  ]
})
export class ImportpermitcancellationModule { }
