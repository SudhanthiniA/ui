import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'iuspecialcasebrandandlabelreg',
    loadChildren: () => import('./iuspecialcasebrandandlabelreg/brandandlabelregistration.module').then(module => module.BrandandlabelregistrationModule)
  },
  {
    path: 'importpermit',
    loadChildren: () => import('./importpermit/importpermit.module').then(module => module.ImportpermitModule)
  },
  {
    path: 'importpermitrequestbio1',
    loadChildren: () => import('./importpermitrequestbio1a/importpermit.module').then(module => module.ImportpermitModule)
  },
  {
    path: 'importpermitacceptancebio1',
    loadChildren: () => import('./importpermitacceptancebio1/importpermit.module').then(module => module.ImportpermitModule)
  },
  {
    path: 'importpermitacceptancebycbw',
    loadChildren: () => import('./importpermitacceptancebycbw/importpermit.module').then(module => module.ImportpermitModule)
  },
  {
    path: 'importpermitrequest',
    loadChildren: () => import('./importpermitrequest/importpermitrequest.module').then(module => module.ImportpermitrequestModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportunitRoutingModule { }
