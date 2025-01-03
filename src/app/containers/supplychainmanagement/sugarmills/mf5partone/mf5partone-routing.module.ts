import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mf5partoneComponent } from './mf5partone.component';
import { Addeditmf5partoneComponent } from './addeditmf5partone/addeditmf5partone.component';
import { Viewmf5partoneComponent } from './viewmf5partone/viewmf5partone.component';


const routes: Routes = [

  {
    path : 'list',
    component : Mf5partoneComponent
  },
  {
    path : 'add',
    component : Addeditmf5partoneComponent
  },
  {
    path : 'edit/:Id',
    component : Addeditmf5partoneComponent
  },
  {
    path : 'view/:Id',
    component : Viewmf5partoneComponent
  },
  {
    path : 'preview',
    component : Viewmf5partoneComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf5partoneRoutingModule { }
