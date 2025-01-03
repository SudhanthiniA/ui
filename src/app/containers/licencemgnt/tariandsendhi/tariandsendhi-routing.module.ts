import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tariandsendhicl7',
    loadChildren: () => import('./tariandsendhicl7/tariandsendhicl7.module').then(m => m.Tariandsendhicl7Module)
  },
  {
    path: 'tariandsendhicl8',
    loadChildren: () => import('./tariandsendhicl8/tariandsendhicl8.module').then(m => m.Tariandsendhicl8Module)
  },
  {
    path: 'tariandsendhicl9',
    loadChildren: () => import('./tariandsendhicl9/tariandsendhicl9.module').then(m => m.Tariandsendhicl9Module)
  },
  {
    path: 'tariandsendhicl10',
    loadChildren: () => import('./tariandsendhicl10/tariandsendhicl10.module').then(m => m.Tariandsendhicl10Module)
  },
  {
    path: 'tariandsendhicl10a',
    loadChildren: () => import('./tariandsendhicl10a/tariandsendhicl10a.module').then(m => m.Tariandsendhicl10aModule)
  },
  {
    path: 'tariandsendhicl11',
    loadChildren: () => import('./tariandsendhicl11/tariandsendhicl11.module').then(m => m.Tariandsendhicl11Module)
  },
  {
    path: 'tariandsendhicl12',
    loadChildren: () => import('./tariandsendhicl12/tariandsendhicl12.module').then(m => m.Tariandsendhicl12Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariandsendhiRoutingModule { }
