import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'indentrequestbycattlefeed', loadChildren: () => import('./indentrequestbycattlefeed/indentrequestbycattlefeed.module').then(m => m.IndentrequestbycattlefeedModule)
  // },
  {
    path: 'indentrequestbycattlefeed', 
    loadChildren: () => import('./indentrequestbycattlefeed/indentrequestbycattlefeed.module').then(m => m.IndentrequestbycattlefeedModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CattlefeedindustryWithinupRoutingModule { }
