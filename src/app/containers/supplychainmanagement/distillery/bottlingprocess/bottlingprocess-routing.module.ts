import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingprocessComponent } from './bottlingprocess.component';
import { AddbottlingprocessComponent } from './addbottlingprocess/addbottlingprocess.component';
import { ViewbottlingprocessComponent } from './viewbottlingprocess/viewbottlingprocess.component';


const routes: Routes = [

  {
    path : 'list',
    component : BottlingprocessComponent
  },
  {
    path: 'view/:id',
    component : ViewbottlingprocessComponent
  },
  {
    path : 'add',
    component : AddbottlingprocessComponent
  },
  {
    path : 'edit/:id',
    component : AddbottlingprocessComponent
  },
  {
    path: 'preview',
    component : ViewbottlingprocessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprocessRoutingModule { }
