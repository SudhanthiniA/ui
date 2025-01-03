import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertetinComponent } from './convertetin.component';
import { AddconvertetinComponent } from './addconvertetin/addconvertetin.component';
import { ViewconvertetinComponent } from './viewconvertetin/viewconvertetin.component';
const routes: Routes = [
  { 
    path: 'list', 
    component: ConvertetinComponent
  },
  { 
    path: 'add', 
    component: AddconvertetinComponent
  },
  { 
    path: 'view', 
    component: ViewconvertetinComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertetinRoutingModule { }
