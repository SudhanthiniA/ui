import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampletestfeesComponent } from './sampletestfees.component';
import { AddsampletestfeesComponent } from './addsampletestfees/addsampletestfees.component';
import { EditsampletestfeesComponent } from './editsampletestfees/editsampletestfees.component';
import { ViewsampletestfeesComponent } from './viewsampletestfees/viewsampletestfees.component';


const routes: Routes = [
  { path: 'list', component: SampletestfeesComponent },
  { path: 'add', component: AddsampletestfeesComponent },
  { path: 'edit', component: EditsampletestfeesComponent },
   { path: 'view', component: ViewsampletestfeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampletestfeesRoutingModule { }
