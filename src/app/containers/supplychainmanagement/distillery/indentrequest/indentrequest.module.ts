import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IndentrequestRoutingModule } from './indentrequest-routing.module';
import { IndentrequestComponent } from './indentrequest.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { AddeditindentrequestComponent } from './addeditindentrequest/addeditindentrequest.component';

@NgModule({
  declarations: [IndentrequestComponent, ViewindentrequestComponent, AddeditindentrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentrequestRoutingModule,
    NgbModule
  ]
})
export class IndentrequestModule { }
