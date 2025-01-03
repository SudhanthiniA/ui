import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'stockbatches',
    loadChildren: () => import('./stockbatches/stockbatches.module').then(m => m.StockbatchesModule)
  },
  {
    path: 'consolidatedsamplereport',
    loadChildren: () => import('./consolidatedsamplereport/consolidatedsamplereport.module').then(m => m.ConsolidatedsamplereportModule)
  },
  {
    path: 'samplereceiptack',
    loadChildren: () => import('./samplereceiptack/samplereceiptack.module').then(m => m.SamplereceiptackModule)
  },
  {
    path: 'samplereceived',
    loadChildren: () => import('./samplereceived/samplereceived.module').then(m => m.SamplereceivedModule)
  },
  {
    path: 'samplexamination',
    loadChildren: () => import('./samplexamination/samplexamination.module').then(m => m.SamplexaminationModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChemicalexaminationRoutingModule { }
