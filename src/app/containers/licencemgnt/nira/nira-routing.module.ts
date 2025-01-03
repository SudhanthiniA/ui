import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiraComponent } from './nira.component';



const routes: Routes = [
  {
    path : 'list',
    component : NiraComponent
  },
 
  {
    path: 'nira-st1',
    loadChildren: () => import('./nira-st1/nira-st1.module').then(m => m.NiraSt1Module)
  },
  {
    path: 'nira-st2',
    loadChildren: () => import('./nira-st2/nira-st2.module').then(m => m.NiraSt2Module)
  },
  {
    path: 'nira-st3',
    loadChildren: () => import('./nira-st3/nira-st3.module').then(m => m.NiraSt3Module)
  },
  {
    path: 'nira-st4',
    loadChildren: () => import('./nira-st4/nira-st4.module').then(m => m.NiraSt4Module)
  },
 
  // {
  //   path: ':screenSubType', // fl4a
  //   component: niraLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber', // fl4a
  //   component: niraLicenseFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiraRoutingModule { }
