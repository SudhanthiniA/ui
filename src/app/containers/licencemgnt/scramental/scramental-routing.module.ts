import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScramentalComponent } from './scramental.component';

const routes: Routes = [
  {
    path : '',
    component : ScramentalComponent
  },
  {
    path: 'sw1',
    loadChildren: () => import('./sw1/sw1.module').then(m => m.Sw1Module)
  },
  {
    path: 'ndlcexp',
    loadChildren: () => import('./ndlcexp/ndlcexp.module').then(m => m.NdlcexpModule)
  },
  {
    path: 'ndlcimp',
    loadChildren: () => import('./ndlcimp/ndlcimp.module').then(m => m.NdlcimpModule)
  },
  {
    path: 'impliquor',
    loadChildren: () => import('./impliquor/impliquor.module').then(m => m.ImpliquorModule)
  },{
    path: 'fl22importpermit',
    loadChildren: () => import('./fl22importpermit/fl22importpermit.module').then(m => m.Fl22importpermitModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScramentalRoutingModule { }
