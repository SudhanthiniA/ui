import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'licenseapplicensereg',
    loadChildren: () => import('./licenseapplicensereg/licenseapplicensereg.module').then(m => m.LicenseapplicenseregModule)
  },
  {
    path: 'districitwisereg',
    loadChildren: () => import('./districitwisereg/districitwisereg.module').then(m => m.DistricitwisereggModule)
  },
  {
    path: 'sitevisit',
    loadChildren: () => import('./sitevisit/districitwisereg.module').then(m => m.DistricitwisereggModule)
  },
  {
    path: 'notifisentlicreg',
    loadChildren: () => import('./notifisentlicreg/notifisentlicreg.module').then(m => m.NotifisentlicregModule)
  },
  {
    path: 'licensefeelicreg',
    loadChildren: () => import('./licensefeelicreg/licensefeelicreg.module').then(m => m.LicensefeelicregModule)
  },
  {
    path: 'statusrptlicreg',
    loadChildren: () => import('./statusrptlicreg/statusrptlicreg.module').then(m => m.StatusrptlicregModule)
  },
  {
    path: 'advsearchlicreg',
    loadChildren: () => import('./advsearchlicreg/advsearchlicreg.module').then(m => m.AdvsearchlicregModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensereportRoutingModule { }
