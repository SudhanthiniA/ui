import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocktypeComponent } from './stocktype.component';
import { AddstocktypeComponent } from './addstocktype/addstocktype.component';
import { ViewstocktypeComponent } from './viewstocktype/viewstocktype.component';

const routes: Routes = [
  { path: 'list', component: StocktypeComponent },
  { path: 'add', component: AddstocktypeComponent },
  { path: 'view', component: ViewstocktypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocktypeRoutingModule { }
