import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular-highcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ImflAddComponent } from './annexure22/imfl-add/imfl-add.component';
import { ViewComponent } from './annexure22/view/view.component';
import { EditComponent } from './annexure22/edit/edit.component';
import { FourofficersComponent } from './fourofficers/fourofficers.component';
import { FourofficersviewComponent } from './fourofficers/fourofficersview/fourofficersview.component';
import { FourofficerreportComponent } from './fourofficers/fourofficerreport/fourofficerreport.component';
import { ReportlistComponent } from './annexure22/reportlist/reportlist.component';
import { Annexure22Component } from './annexure22/annexure22.component';
import { Annexureb12Component } from './annexureb12/annexureb12.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgbModule,
    ChartModule,
  ],
  providers: [],
  declarations: [DashboardComponent,Annexureb12Component, ImflAddComponent, ViewComponent, EditComponent,FourofficersComponent, FourofficersviewComponent, FourofficerreportComponent, ReportlistComponent, Annexure22Component],
})
export class DashboardModule { }