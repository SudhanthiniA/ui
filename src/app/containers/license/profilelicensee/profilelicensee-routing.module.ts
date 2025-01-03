import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilelicenseeComponent } from './profilelicensee.component';


const routes: Routes = [
  { path: 'licensee', component: ProfilelicenseeComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilelicenseeRoutingModule { }
