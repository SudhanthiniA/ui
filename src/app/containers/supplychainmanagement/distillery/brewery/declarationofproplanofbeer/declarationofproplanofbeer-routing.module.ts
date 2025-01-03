import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofproplanofbeerComponent } from './declarationofproplanofbeer.component';
import { AdddeclarationofproplanofbeerComponent } from './adddeclarationofproplanofbeer/adddeclarationofproplanofbeer.component';
import { ViewdeclarationofproplanofbeerComponent } from './viewdeclarationofproplanofbeer/viewdeclarationofproplanofbeer.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AdddeclarationofproplanofbeerComponent
  },
  {
    path : 'view',
    component : ViewdeclarationofproplanofbeerComponent
  },
  {
    path : 'list',
    component : DeclarationofproplanofbeerComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationofproplanofbeerRoutingModule { }
