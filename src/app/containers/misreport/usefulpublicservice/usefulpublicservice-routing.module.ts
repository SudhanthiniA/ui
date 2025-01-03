import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanhitapptrackComponent } from './janhitapptrack/janhitapptrack.component';
import { Fl11summaryComponent } from './fl11summary/fl11summary.component';
import { HomebarapplComponent } from './homebarappl/homebarappl.component';  
import { StatusreportoccComponent } from './statusreportocc/statusreportocc.component'; 
import { NiveshmithratrackingComponent } from './niveshmithratracking/niveshmithratracking.component';
 
const routes: Routes = [
  { path: 'janhitapptrack', component: JanhitapptrackComponent },
  { path: 'fl11summary', component: Fl11summaryComponent },
  { path: 'homebarappl', component: HomebarapplComponent },
  { path: 'statusreportocc', component: StatusreportoccComponent },
  { path: 'niveshmithratracking', component: NiveshmithratrackingComponent }
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsefulpublicserviceRoutingModule { }
