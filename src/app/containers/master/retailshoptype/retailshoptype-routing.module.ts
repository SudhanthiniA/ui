import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailshoptypeComponent } from './retailshoptype.component';
import { AddretailshoptypeComponent } from './addretailshoptype/addretailshoptype.component';
import { ViewretailshoptypeComponent } from './viewretailshoptype/viewretailshoptype.component';

const routes: Routes = [
  { path: 'list', component: RetailshoptypeComponent },
  { path: 'add', component: AddretailshoptypeComponent },
  { path: 'view', component: ViewretailshoptypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailshoptypeRoutingModule { }
