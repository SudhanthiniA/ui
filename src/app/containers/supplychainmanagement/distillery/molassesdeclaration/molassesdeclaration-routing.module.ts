import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MolassesdeclarationComponent } from './molassesdeclaration.component';
import { AddmolassesdeclarationComponent } from './addmolassesdeclaration/addmolassesdeclaration.component';
import { ViewmolassesdeclarationComponent } from './viewmolassesdeclaration/viewmolassesdeclaration.component';


const routes: Routes = [
  { path: 'list', component: MolassesdeclarationComponent},
  {path: 'add', component: AddmolassesdeclarationComponent},
  {path: 'view', component: ViewmolassesdeclarationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesdeclarationRoutingModule { }
