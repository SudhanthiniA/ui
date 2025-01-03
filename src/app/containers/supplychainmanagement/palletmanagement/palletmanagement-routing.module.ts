import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'searchforcase',
  loadChildren: () => import('./searchforcase/searchforcase.module').then(module => module.SearchforcaseModule)
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletmanagementRoutingModule { }
