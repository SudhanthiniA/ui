import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofcotnewComponent } from './declarationofcotnew.component';
import { AdddeclarationofcotnewComponent } from './adddeclarationofcotnew/adddeclarationofcotnew.component';
import { ViewdeclarationofcotnewComponent } from './viewdeclarationofcotnew/viewdeclarationofcotnew.component';


const routes: Routes = [
  {
    path : 'list',
    component : DeclarationofcotnewComponent
  },
  {
    path: 'add',
    component : AdddeclarationofcotnewComponent
  },
  {
    path : 'view',
    component : ViewdeclarationofcotnewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationofcotnewRoutingModule { }
