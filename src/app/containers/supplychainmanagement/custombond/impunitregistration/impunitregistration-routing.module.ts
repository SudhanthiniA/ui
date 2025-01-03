import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpunitregistrationComponent } from './impunitregistration.component';

const routes: Routes = [
  { path: 'add', component: ImpunitregistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpunitregistrationRoutingModule { }
