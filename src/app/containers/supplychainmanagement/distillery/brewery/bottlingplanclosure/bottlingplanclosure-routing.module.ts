import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingplanclosureComponent } from './bottlingplanclosure.component';
import { AddbottlingplanclosureComponent } from './addbottlingplanclosure/addbottlingplanclosure.component';
import { ViewbottlingplanclosureComponent } from './viewbottlingplanclosure/viewbottlingplanclosure.component';

const routes: Routes = [ 
  {
    path : 'add',
    component : AddbottlingplanclosureComponent
  },
  {
    path : 'view',
    component : ViewbottlingplanclosureComponent
  },
  {
    path : 'list',
    component : BottlingplanclosureComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingplanclosureRoutingModule { }
