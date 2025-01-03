import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddcustombondComponent } from './addcustombond/addcustombond.component';
import { ViewcustombondComponent } from './viewcustombond/viewcustombond.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddcustombondComponent
  },
  {
    path: 'view',
    component: ViewcustombondComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustombondRoutingModule { }
