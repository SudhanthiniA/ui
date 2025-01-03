import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'userauthentication',
    loadChildren: () => import('./Userauthentication/Userauthentication.module').then(m => m.UserauthenticationModule)
  },
  {
    path: 'installationandverification',
    loadChildren: () => import('./installationandverification/installationandverification.module').then(m => m.InstallationandverificationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigilockRoutingModule { }
