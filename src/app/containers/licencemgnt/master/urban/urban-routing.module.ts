import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrbanComponent } from './urban.component';
import { ViewurbanComponent } from './viewurban/viewurban.component';

const routes: Routes = [
  {
    path : 'list',
    component : UrbanComponent
  },
  {
    path : 'view',
    component : ViewurbanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrbanRoutingModule { }
