import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WastageofbeerduringbottlingprocessComponent } from './wastageofbeerduringbottlingprocess.component';
import { AddwastageofbeerduringbottlingprocessComponent } from './addwastageofbeerduringbottlingprocess/addwastageofbeerduringbottlingprocess.component';
import { ViewwastageofbeerduringbottlingprocessComponent } from './viewwastageofbeerduringbottlingprocess/viewwastageofbeerduringbottlingprocess.component';

const routes: Routes = [
  {
    path : 'list',
    component : WastageofbeerduringbottlingprocessComponent
  },
  {
    path : 'add',
    component : AddwastageofbeerduringbottlingprocessComponent
  },
  {
    path : 'view',
    component : ViewwastageofbeerduringbottlingprocessComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WastageofbeerduringbottlingprocessRoutingModule { }
