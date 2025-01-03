import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakagefeesComponent } from './breakagefees.component';
import { AddbreakagefeesComponent } from './addbreakagefees/addbreakagefees.component';
import { EditbreakagefeesComponent } from './editbreakagefees/editbreakagefees.component';
import { ViewbreakagefeesComponent } from './viewbreakagefees/viewbreakagefees.component';


const routes: Routes = [
  { path: 'list', component: BreakagefeesComponent },
  { path: 'add', component: AddbreakagefeesComponent },
  { path: 'edit', component: EditbreakagefeesComponent },
   { path: 'view', component: ViewbreakagefeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakagefeesRoutingModule { }
