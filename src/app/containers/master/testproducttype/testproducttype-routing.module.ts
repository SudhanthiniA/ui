import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestproducttypeComponent } from './testproducttype.component';
import { AddtestproducttypeComponent } from './addtestproducttype/addtestproducttype.component';
import { ViewtestproducttypeComponent } from './viewtestproducttype/viewtestproducttype.component';

const routes: Routes = [
  { path: 'list', component: TestproducttypeComponent },
  { path: 'add', component: AddtestproducttypeComponent },
  { path: 'view', component: ViewtestproducttypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestproducttypeRoutingModule { }
