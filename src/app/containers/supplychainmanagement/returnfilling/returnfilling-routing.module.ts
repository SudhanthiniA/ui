import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'retail',
    loadChildren: () => import('./retail/retail.module').then(m => m.RetailModule)
  },
  {
    path: 'hbr',
    loadChildren: () => import('./hbr/hbr.module').then(m => m.HbrModule)
  },
  {
    path: 'returnfillingapplication',
    loadChildren: () => import('./returnfillingapplication/returnfillingapplication.module').then(m => m.ReturnfillingapplicationModule)
  },
  {
    path: 'bondwarehouse',
    loadChildren: () => import('./bondwarehouse/bondwarehouse.module').then(m => m.BondwarehouseModule)
  },
  {
    path: 'wholesale',
    loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
  },
  {
    path: 'returnfillinglist',
    loadChildren: () => import('./returnfillinglist/returnfillinglist.module').then(m => m.ReturnfillinglistModule)
  },
  {
    path: 'citizenlicenseprofilelogin',
    loadChildren: () => import('./citizenlicenseprofilelogin/citizenlicenseprofilelogin.module').then(m => m.CitizenlicenseprofileloginModule)
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class returnfillingapplicationRoutingModule { }
