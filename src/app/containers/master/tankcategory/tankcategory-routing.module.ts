import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankcategoryComponent } from './tankcategory.component';
import { AddtankcategoryComponent } from './addtankcategory/addtankcategory.component';
import { ViewtankcategoryComponent } from './viewtankcategory/viewtankcategory.component';


const routes: Routes = [

  { path: 'list', component: TankcategoryComponent },
  { path: 'add', component: AddtankcategoryComponent },
  { path: 'view', component: ViewtankcategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankcategoryRoutingModule { }
