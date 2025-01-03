import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofcotComponent } from './declarationofcot.component';
import { AdddeclarationofcotComponent } from './adddeclarationofcot/adddeclarationofcot.component';
import { ViewdeclarationofcotComponent } from './viewdeclarationofcot/viewdeclarationofcot.component';

const routes: Routes = [
  { path: 'list', component: DeclarationofcotComponent },
{
  path : 'add',
  component : AdddeclarationofcotComponent
},
{
  path : 'view',
  component : ViewdeclarationofcotComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationofcotRoutingModule { }
