import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailmstistComponent } from './retailmstist.component';
import { AddretailmstistComponent } from './addretailmstist/addretailmstist.component';
import { ViewretailmstistComponent } from './viewretailmstist/viewretailmstist.component';


const routes: Routes = [
  { path: 'list', component: RetailmstistComponent },

  { path: 'add', component: AddretailmstistComponent },
  { path: 'view', component: ViewretailmstistComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailmstistRoutingModule { }
