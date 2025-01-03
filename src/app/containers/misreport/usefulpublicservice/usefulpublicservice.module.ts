import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { UsefulpublicserviceRoutingModule } from './usefulpublicservice-routing.module';
import { JanhitapptrackComponent } from './janhitapptrack/janhitapptrack.component';
import { Fl11summaryComponent } from './fl11summary/fl11summary.component';
import { HomebarapplComponent } from './homebarappl/homebarappl.component';
import { StatusreportoccComponent } from './statusreportocc/statusreportocc.component';
import { NiveshmithratrackingComponent } from './niveshmithratracking/niveshmithratracking.component';

@NgModule({
  declarations: [NiveshmithratrackingComponent,JanhitapptrackComponent, Fl11summaryComponent, HomebarapplComponent, StatusreportoccComponent, ],
    imports: [
    CommonModule,
    SharedModule,
    UsefulpublicserviceRoutingModule
  
  ]
})
export class UsefulpublicserviceModule { }
