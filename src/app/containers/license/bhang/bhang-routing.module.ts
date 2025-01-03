import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhangComponent } from './bhang.component';


const routes: Routes = [
  { path: 'add', component: BhangComponent },
  {
    path: 'cl7s',
    loadChildren: () => import('./cl7s/cl7s.module').then(m => m.Cl7sModule)
  },
  {
    path: 'cl8',
    loadChildren: () => import('./cl8/cl8.module').then(m => m.Cl8Module)
  },
  {
    path: 'cl9',
    loadChildren: () => import('./cl9/cl9.module').then(m => m.Cl9Module)
  },
  {
    path: 'cl12',
    loadChildren: () => import('./cl12/cl12.module').then(m => m.Cl12Module)
  },
    {
      path: 'st1',
    loadChildren: () => import('./st1/st1.module').then(m => m.St1Module)
  },
  {
    path: 'st2',
    loadChildren: () => import('./st2/st2.module').then(m => m.St2Module)
  },
  {  
    path: 'id14a',
    loadChildren: () => import('./id14a/id14a.module').then(m => m.Id14aModule)
  },
  {
    path: 'id14b',
    loadChildren: () => import('./id14b/id14b.module').then(m => m.Id14bModule)
  },
  {
    path: 'cl10',
    loadChildren: () => import('./cl10/cl10.module').then(m => m.Cl10Module)
  },
  {
    path: 'cl10a',
    loadChildren: () => import('./cl10a/cl10a.module').then(m => m.Cl10aModule)
  },
  {
    path: 'cl11',
    loadChildren: () => import('./cl11/cl11.module').then(m => m.Cl11Module)
  },
 { 
  path: 'st3',
  loadChildren: () => import('./st3/st3.module').then(m => m.St3Module)
},
{
path: 'st4',
loadChildren: () => import('./st4/st4.module').then(m => m.St4Module)
},
{
  path: 'id16',
  loadChildren: () => import('./id16/id16.module').then(m => m.Id16Module)
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhangRoutingModule { }
