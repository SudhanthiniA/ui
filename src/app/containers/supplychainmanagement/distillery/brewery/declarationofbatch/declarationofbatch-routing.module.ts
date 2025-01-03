import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofbatchComponent } from './declarationofbatch.component';
import { AdddeclarationofbatchComponent } from './adddeclarationofbatch/adddeclarationofbatch.component';
import { ViewdeclarationofbatchComponent } from './viewdeclarationofbatch/viewdeclarationofbatch.component';


const routes: Routes = [
  {
    path : 'list',
    component : DeclarationofbatchComponent
  },
  {
    path : 'add',
    component : AdddeclarationofbatchComponent
  },
  {
    path : 'view',
    component : ViewdeclarationofbatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationofbatchRoutingModule { }
