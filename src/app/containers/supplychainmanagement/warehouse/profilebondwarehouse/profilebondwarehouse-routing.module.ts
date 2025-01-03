import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilebondwarehouseComponent } from './profilebondwarehouse.component';


const routes: Routes = [{ 
  path: 'view', component: ProfilebondwarehouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilebondwarehouseRoutingModule { }
