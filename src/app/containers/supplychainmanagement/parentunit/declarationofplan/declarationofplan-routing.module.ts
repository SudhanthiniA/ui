import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofplanComponent } from './declarationofplan.component';
import { AdddeclarationofplanComponent } from './adddeclarationofplan/adddeclarationofplan.component';
import { ViewdeclarationofplanComponent } from './viewdeclarationofplan/viewdeclarationofplan.component';
import { MappedComponent } from './mapped/mapped.component';

const routes: Routes = [ 
  { path: 'list', component: DeclarationofplanComponent },
  { path: 'add', component: AdddeclarationofplanComponent },
  { path: 'view', component: ViewdeclarationofplanComponent },
  { path: 'mapped', component: MappedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DeclarationofplanRoutingModule { }
