import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemmasterComponent } from './additemmaster/additemmaster.component';
import { ItemmasterComponent } from './itemmaster.component';
import { ViewitemmasterComponent } from './viewitemmaster/viewitemmaster.component';


const routes: Routes = [
  {
    path : 'list',
    component : ItemmasterComponent
  },
  {
    path : 'add',
    component : AdditemmasterComponent
  },
  {
    path : 'edit/:Id',
    component : AdditemmasterComponent
  },
  {
    path : 'view/:Id',
    component : ViewitemmasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemmasterRoutingModule { }
