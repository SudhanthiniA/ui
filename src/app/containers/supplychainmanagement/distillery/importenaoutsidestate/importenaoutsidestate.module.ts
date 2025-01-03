import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportenaoutsidestateRoutingModule } from './importenaoutsidestate-routing.module';

import { AddimportenaoutsidestateComponent } from './addimportenaoutsidestate/addimportenaoutsidestate.component';
import { ViewimportenaoutsidestateComponent } from './viewimportenaoutsidestate/viewimportenaoutsidestate.component';
import { ImportenaoutsidestateComponent } from './importenaoutsidestate.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddimportenaoutsidestateComponent, ViewimportenaoutsidestateComponent, ImportenaoutsidestateComponent],
  imports: [
    CommonModule,
    ImportenaoutsidestateRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ImportenaoutsidestateModule { }
