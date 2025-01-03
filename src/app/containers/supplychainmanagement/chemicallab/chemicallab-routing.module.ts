import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'samplerequest',
    loadChildren: () => import('./samplerequest/samplerequest.module').then(module => module.SamplerequestModule)
  },
  {
    path: 'sampledisposable',
    loadChildren: () => import('./sampledisposable/sampledisposable.module').then(module => module.SampledisposableModule)
  },
  {
    path: 'subinspector',
    loadChildren: () => import('./subinspector/subinspector.module').then(module => module.SubinspectorModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChemicallabRoutingModule { }
