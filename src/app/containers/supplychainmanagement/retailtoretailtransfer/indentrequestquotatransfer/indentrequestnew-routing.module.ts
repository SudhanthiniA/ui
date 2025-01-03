import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentrequestnewComponent } from './indentrequestnew.component';
import { AddindentrequestnewComponent } from './addindentrequestnew/addindentrequestnew.component';
import { ViewindentrequestnewComponent } from './viewindentrequestnew/viewindentrequestnew.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: 'list',
    component: IndentrequestnewComponent
  },
  {
    path: 'add',
    component: AddindentrequestnewComponent
  },
  {
    path: 'view',
    component: ViewindentrequestnewComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestnewRoutingModule { }
