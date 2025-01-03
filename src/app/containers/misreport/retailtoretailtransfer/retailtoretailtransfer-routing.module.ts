import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MisquotadetailsComponent } from './misquotadetails/misquotadetails.component';
import { MistransfersalesComponent } from './mistransfersales/mistransfersales.component';
import { MissalesandtransferComponent } from './missalesandtransfer/missalesandtransfer.component';

const routes: Routes = [
  { path: 'misquotadetails', component: MisquotadetailsComponent },  
  { path: 'mistransfersales', component: MistransfersalesComponent },  
  { path: 'missalesandtransfer', component: MissalesandtransferComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtoretailtransferRoutingModule { }
