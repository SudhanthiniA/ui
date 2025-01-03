import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleofdenaturedfeesComponent } from './saleofdenaturedfees.component';
import { AddsaleofdenaturedfeesComponent } from './addsaleofdenaturedfees/addsaleofdenaturedfees.component';
import { EditsaleofdenaturedfeesComponent } from './editsaleofdenaturedfees/editsaleofdenaturedfees.component';
import { ViewsaleofdenaturedfeesComponent } from './viewsaleofdenaturedfees/viewsaleofdenaturedfees.component';


const routes: Routes = [
  { path: 'list', component: SaleofdenaturedfeesComponent },
  { path: 'add', component: AddsaleofdenaturedfeesComponent },
  { path: 'edit', component: EditsaleofdenaturedfeesComponent },
   { path: 'view', component: ViewsaleofdenaturedfeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleofdenaturedfeesRoutingModule { }
