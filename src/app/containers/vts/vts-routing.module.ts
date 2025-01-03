import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'newvts',
    loadChildren: () => import('./newvts/newvts.module').then(m => m.NewvtsModule)
  },
  {
    path: 'vendorregistration',
    loadChildren: () => import('./vendorregistration/vendorregistration.module').then(m => m.VendorregistrationModule)
  },
  {
    path: 'deviceregistration',
    loadChildren: () => import('./deviceregistration/deviceregistration.module').then(m => m.DeviceregistrationModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VtsRoutingModule { }
