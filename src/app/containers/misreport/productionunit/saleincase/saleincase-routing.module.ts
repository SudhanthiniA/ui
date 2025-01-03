import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleincaseComponent } from './saleincase.component';

const routes: Routes = [
  { path: 'list', component: SaleincaseComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleincaseRoutingModule { }
