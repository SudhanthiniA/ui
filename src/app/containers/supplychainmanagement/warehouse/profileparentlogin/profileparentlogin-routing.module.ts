import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileparentloginComponent } from './profileparentlogin.component';


const routes: Routes = [{ 
  path: 'view', component: ProfileparentloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileparentloginRoutingModule { }


