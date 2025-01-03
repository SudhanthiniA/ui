import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotaComponent } from './quota.component';
import { ViewquotaComponent } from './viewquota/viewquota.component';

const routes: Routes = [
  {
    path : 'list',
    component : QuotaComponent
  },
  {
    path : 'view',
    component : ViewquotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotaRoutingModule { }
