import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentrequestRoutingModule } from './indentrequest-routing.module';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { IndentrequestComponent } from './indentrequest.component';
import { AddindentrequestComponent } from './addindentrequest/addindentrequest.component';
import { AddindentrequestcancellationComponent } from './addindentrequestcancellation/addindentrequestcancellation.component';



@NgModule({
  declarations: [ViewindentrequestComponent, IndentrequestComponent, AddindentrequestComponent, AddindentrequestcancellationComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentrequestRoutingModule
  ]
})
export class IndentrequestModule { }
