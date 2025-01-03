import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'casemanagement',
    loadChildren: () => import('./casemanagement/casemanagement.module').then(module => module.CasemanagementModule)
  },
  {
    path: 'districtlevelcaseform',
    loadChildren: () => import('./districtlevelcaseform/districtlevelcaseform.module').then(module => module.DistrictlevelcaseformModule)
  }, 
  {
    path: 'exciseappeal',
    loadChildren: () => import('./exciseappeal/exciseappeal.module').then(module => module.ExciseappealModule)
  },   
  {
    path: 'highcourtcaseform',
    loadChildren: () => import('./highcourtcaseform/highcourtcaseform.module').then(module => module.HighcourtcaseformModule)
  }, 
  {
    path: 'uppublicservicetribunalcase',
    loadChildren: () => import('./uppublicservicetribunalcase/uppublicservicetribunalcase.module').then(module => module.UppublicservicetribunalcaseModule)
  },  
  
  {
    path: 'supremecourtcaseform',
    loadChildren: () => import('./supremecourtcaseform/supremecourtcaseform.module').then(module => module.SupremecourtcaseformModule)
  },   
  {
    path: 'caseforblacklistedvehicle',
    loadChildren: () => import('./caseforblacklistedvehicle/caseforblacklistedvehicle.module').then(module => module.CaseforblacklistedvehicleModule)
  },
  {
    path: 'creationofcaseonthebasisofalert',
    loadChildren: () => import('./creationofcaseonthebasisofalert/creationofcase.module').then(module => module.CreationofcaseModule)
  },
  {
    path: 'sizedvehicle',
    loadChildren: () => import('./sizedvehicle/sizedvehicle.module').then(module => module.SizedvehicleModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasemanagementRoutingModule { }
