import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerwastageduringbottlingComponent } from './beerwastageduringbottling.component';
import { AddbeerwastageduringbottlingComponent } from './addbeerwastageduringbottling/addbeerwastageduringbottling.component';
import { EditbeerwastageduringbottlingComponent } from './editbeerwastageduringbottling/editbeerwastageduringbottling.component';
import { ViewbeerwastageduringbottlingComponent } from './viewbeerwastageduringbottling/viewbeerwastageduringbottling.component';


const routes: Routes = [
  { path: 'list', component: BeerwastageduringbottlingComponent },
  { path: 'add', component: AddbeerwastageduringbottlingComponent },
  { path: 'edit', component: EditbeerwastageduringbottlingComponent },
   { path: 'view', component: ViewbeerwastageduringbottlingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerwastageduringbottlingRoutingModule { }
