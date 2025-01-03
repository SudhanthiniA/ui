import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

const routes: Routes = [

  {
    path: 'mstistgoods',
    loadChildren: () => import('./mstistgoods/mstistgoods.module').then(module => module.MstistgoodsModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchprocessRoutingModule { }
