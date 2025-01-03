import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'insideupindustry',
    loadChildren: () => import('./insideupindustry/insideupindustry.module').then(module => module.InsideupindustryModule)
  },
  {
    path: 'industryoutsidestate',
    loadChildren: () => import('./industryoutsidestate/industryoutsidestate.module').then(module => module.IndustryoutsidestateModule)
  },
  {
    path: 'distilleryoutsidestate',
    loadChildren: () => import('./distilleryoutsidestate/distilleryoutsidestate.module').then(module => module.DistilleryoutsidestateModule)
  },
  {
    path: 'insideupdistilleryforcheavy',
    loadChildren: () => import('./insideupdistilleryforcheavy/insideupdistilleryforcheavy.module').then(module => module.InsideupdistilleryforcheavyModule)
  },
  {
    path: 'insideupdistilleryforbheavy',
    loadChildren: () => import('./insideupdistilleryforbheavy/insideupdistilleryforbheavy.module').then(module => module.InsideupdistilleryforbheavyModule)
  },
  {
    path: 'cheavyliftingandbalancereport',
    loadChildren: () => import('./cheavyliftingandbalancereport/cheavyliftingandbalancereport.module').then(module => module.CheavyliftingandbalancereportModule)
  },
  {
    path: 'bheavyliftingandbalancereport',
    loadChildren: () => import('./bheavyliftingandbalancereport/bheavyliftingandbalancereport.module').then(module => module.BheavyliftingandbalancereportModule)
  },
  {
    path: 'unreservedmolassesreport',
    loadChildren: () => import('./unreservedmolassesreport/unreservedmolassesreport.module').then(module => module.UnreservedmolassesreportModule)
  },
  {
    path: 'reservemolassesreport',
    loadChildren: () => import('./reservemolassesreport/reservemolassesreport.module').then(module => module.ReservemolassesreportModule)
  },
  {
    path: 'sheerastatementformat',
    loadChildren: () => import('./sheerastatementformat/sheerastatementformat.module').then(module => module.SheerastatementformatModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SugarmillreportRoutingModule { }
