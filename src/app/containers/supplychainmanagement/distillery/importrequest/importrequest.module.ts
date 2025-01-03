import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportrequestRoutingModule } from './importrequest-routing.module';
import { ImportrequestComponent } from './importrequest.component';
import { AddeditimportrequestComponent } from './addeditimportrequest/addeditimportrequest.component';
import { ViewimportrequestComponent } from './viewimportrequest/viewimportrequest.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ImportrequestComponent, AddeditimportrequestComponent, ViewimportrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ImportrequestRoutingModule,

  ]
})
export class ImportrequestModule { }
