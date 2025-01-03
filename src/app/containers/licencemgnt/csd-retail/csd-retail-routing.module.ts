import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'fl9',
    loadChildren: () => import('./fl9/fl9.module').then(m => m.Fl9Module)
  },
  {
    path: 'fl9a',
    loadChildren: () => import('./fl9a/fl9a.module').then(m => m.Fl9aModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsdRetailRoutingModule { }
