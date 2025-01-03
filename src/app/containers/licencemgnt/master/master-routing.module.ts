import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';
import { CountryComponent } from './country/country.component';
// import { ViewconfigurationComponent } from './viewconfiguration/viewconfiguration.component';

const routes: Routes = [
  {
    path : 'list',
    component : MasterComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
  },
  {
    path: 'state',
    loadChildren: () => import('./state/state.module').then(m => m.StateModule)
  },
  {
    path: 'district',
    loadChildren: () => import('./district/district.module').then(m => m.DistrictModule)
  },  
  {
    path: 'urban',
    loadChildren: () => import('./urban/urban.module').then(m => m.UrbanModule)
  },  
  {
    path: 'tehsil',
    loadChildren: () => import('./tehsil/tehsil.module').then(m => m.TehsilModule)
  },  
  {
    path: 'municipalcategory',
    loadChildren: () => import('./municipalcategory/municipalcategory.module').then(m => m.MunicipalcategoryModule)
  }, 
  {
    path: 'policestation',
    loadChildren: () => import('./policestation/policestation.module').then(m => m.PolicestationModule)
  }, 
  {
    path: 'salutation',
    loadChildren: () => import('./salutation/salutation.module').then(m => m.SalutationModule)
  },   
  {
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)
  }, 
  {
    path: 'parentunit',
    loadChildren: () => import('./parentunit/parentunit.module').then(m => m.ParentunitModule)
  }, 
  {
    path: 'entitytype',
    loadChildren: () => import('./entitytype/entitytype.module').then(m => m.EntitytypeModule)
  }, 
  {
    path: 'designation',
    loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule)
  }, 
  {
    path: 'licensetenure',
    loadChildren: () => import('./licensetenure/licensetenure.module').then(m => m.LicensetenureModule)
  }, 
  {
    path: 'licensedomain',
    loadChildren: () => import('./licensedomain/licensedomain.module').then(m => m.LicensedomainModule)
  },
  {
    path: 'licensefunctional',
    loadChildren: () => import('./licensefunctional/licensefunctional.module').then(m => m.LicensefunctionalModule)
  },
  {
    path: 'renewal',
    loadChildren: () => import('./renewal/renewal.module').then(m => m.RenewalModule)
  }, 
  {
    path: 'quota',
    loadChildren: () => import('./quota/quota.module').then(m => m.QuotaModule)
  }, 
  {
    path: 'ownership',
    loadChildren: () => import('./ownership/ownership.module').then(m => m.OwnershipModule)
  }, 
  {
    path: 'itr',
    loadChildren: () => import('./itr/itr.module').then(m => m.ItrModule)
  }, 
  {
    path: 'checklist',
    loadChildren: () => import('./checklist/checklist.module').then(m => m.ChecklistModule)
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
