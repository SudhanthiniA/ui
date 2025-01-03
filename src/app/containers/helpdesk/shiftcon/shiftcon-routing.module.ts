import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftconComponent } from './shiftcon.component';
import { ViewshiftconComponent } from './viewshiftcon/viewshiftcon.component';
import { AddshiftconComponent } from './addshiftcon/addshiftcon.component';

const routes: Routes = [
  { path: 'list', component: ShiftconComponent },
  { path: 'add', component: AddshiftconComponent },
  { path: 'view', component: ViewshiftconComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftconRoutingModule { }
