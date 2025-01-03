import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)
  },
  {
    path: 'alertnew',
    loadChildren: () => import('./alertnew/alertnew.module').then(m => m.AlertnewModule)
  },
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwareandsoftwareRoutingModule { }
