import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'fl9',
    loadChildren: () => import('./fl9/fl9.module').then(module => module.Fl9Module)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsdretailRoutingModule { }
