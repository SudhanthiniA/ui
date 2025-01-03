import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'niveshmitradashboard',
    loadChildren: () => import('./niveshmitradashboard/niveshmitradashboard.module').then(module => module.NiveshmitradashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveshmitraRoutingModule { }
