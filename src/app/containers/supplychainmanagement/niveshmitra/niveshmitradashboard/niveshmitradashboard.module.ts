import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NiveshmitradashboardComponent } from './niveshmitradashboard.component';
import { NiveshmitraserviceComponent } from './niveshmitraservice/niveshmitraservice.component';
import {NiveshmitradashboardRoutingModule} from './niveshmitradashboard-routing.module';


@NgModule({
  declarations: [NiveshmitradashboardComponent, NiveshmitraserviceComponent],
  imports: [
    CommonModule,
    SharedModule,
    NiveshmitradashboardRoutingModule
  ]
})
export class NiveshmitradashboardModule { }
