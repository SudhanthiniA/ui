import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheeranidhiregisterComponent } from './sheeranidhiregister.component';
import { AddsheeranidhiregisterComponent } from './addsheeranidhiregister/addsheeranidhiregister.component';
import { ViewsheeranidhiregisterComponent } from './viewsheeranidhiregister/viewsheeranidhiregister.component';


const routes: Routes = [
  {
    path : 'list',
    component : SheeranidhiregisterComponent
  },
  {
    path : 'add',
    component : AddsheeranidhiregisterComponent
  },
  {
    path : 'view',
    component : ViewsheeranidhiregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheeranidhiregisterRoutingModule { }
