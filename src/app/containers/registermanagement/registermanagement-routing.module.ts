import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistermanagementComponent } from './registermanagement.component';
import { ViewregisterComponent } from './viewregister/viewregister.component';


const routes: Routes = [
  {
    path: 'list',
    component: RegistermanagementComponent
  },
  // {
  //   path: 'add',
  //   component: AddeditcencusdataofdistrictsComponent
  // },
  // {
  //   path : 'edit/:Id',
  //   component: AddeditcencusdataofdistrictsComponent
  // },
  {
    path : 'view/:Id',
    component : ViewregisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistermanagementRoutingModule { }
