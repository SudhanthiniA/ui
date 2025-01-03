import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'labelrequest',
    loadChildren: () => import('./labelrequest/labelrequest.module').then(m => m.LabelrequestModule)
  },
  {
    path: 'labeldesign',
    loadChildren: () => import('./labeldesign/labeldesign.module').then(m => m.LabeldesignModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExiselabelsRoutingModule { }
