import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationforyearComponent } from './declarationforyear.component';
import { AdddeclarationforyearComponent } from './adddeclarationforyear/adddeclarationforyear.component';
import { ViewdeclarationforyearComponent } from './viewdeclarationforyear/viewdeclarationforyear.component';


const routes: Routes = [
  {
    path : 'list',
    component : DeclarationforyearComponent
  },
  {
    path : 'add',
    component : AdddeclarationforyearComponent
  },
  {
    path : 'view',
    component : ViewdeclarationforyearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationforyearRoutingModule { }
