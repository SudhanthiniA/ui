import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpiritimportfeesComponent } from './spiritimportfees.component';
import { AddspiritimportfeesComponent } from './addspiritimportfees/addspiritimportfees.component';
import { EditspiritimportfeesComponent } from './editspiritimportfees/editspiritimportfees.component';
import { ViewspiritimportfeesComponent } from './viewspiritimportfees/viewspiritimportfees.component';


const routes: Routes = [
  { path: 'list', component: SpiritimportfeesComponent },
  { path: 'add', component: AddspiritimportfeesComponent },
  { path: 'edit', component: EditspiritimportfeesComponent },
   { path: 'view', component: ViewspiritimportfeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritimportfeesRoutingModule { }
