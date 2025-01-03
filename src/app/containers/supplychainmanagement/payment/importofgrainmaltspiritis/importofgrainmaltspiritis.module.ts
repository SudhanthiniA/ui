import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportofgrainmaltspiritisRoutingModule } from './importofgrainmaltspiritis-routing.module';
import { ImportofgrainmaltspiritisComponent } from './importofgrainmaltspiritis.component';
import { AddimportofgrainmaltspiritisComponent } from './addimportofgrainmaltspiritis/addimportofgrainmaltspiritis.component';
import { ViewimportofgrainmaltspiritisComponent } from './viewimportofgrainmaltspiritis/viewimportofgrainmaltspiritis.component';
import { EditimportofgrainmaltspiritisComponent } from './editimportofgrainmaltspiritis/editimportofgrainmaltspiritis.component';

@NgModule({
  declarations: [ImportofgrainmaltspiritisComponent, AddimportofgrainmaltspiritisComponent, ViewimportofgrainmaltspiritisComponent, EditimportofgrainmaltspiritisComponent],
  imports: [
    CommonModule,
    ImportofgrainmaltspiritisRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ImportofgrainmaltspiritisModule { }
