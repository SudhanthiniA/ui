import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WastagefeesComponent } from './wastagefees.component';
import { AddwastagefeesComponent } from './addwastagefees/addwastagefees.component';
import { EditwastagefeesComponent } from './editwastagefees/editwastagefees.component';
import { ViewwastagefeesComponent } from './viewwastagefees/viewwastagefees.component';


const routes: Routes = [
  { path: 'list', component: WastagefeesComponent },
  { path: 'add', component: AddwastagefeesComponent },
  { path: 'edit', component: EditwastagefeesComponent },
   { path: 'view', component: ViewwastagefeesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WastagefeesRoutingModule { }
