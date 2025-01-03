import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocktransferexpiredComponent } from './stocktransferexpired.component';
import { ViewstocktransferexpiredComponent } from './viewstocktransferexpired/viewstocktransferexpired.component';
import { AddstocktransferexpiredComponent } from './addstocktransferexpired/addstocktransferexpired.component';

const routes: Routes = [
  {
    path : 'list',
    component : StocktransferexpiredComponent
  },
  {
    path : 'view',
    component : ViewstocktransferexpiredComponent
  },
  {
    path : 'add',
    component : AddstocktransferexpiredComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocktransferexpiredRoutingModule { }
