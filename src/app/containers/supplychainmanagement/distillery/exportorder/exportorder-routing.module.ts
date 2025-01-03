import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewexportorderComponent } from './viewexportorder/viewexportorder.component';
import { ExportorderComponent } from './exportorder.component';
import { AddeditexportorderComponent } from './addeditexportorder/addeditexportorder.component';


const routes: Routes = [

  {
    path : 'list',
    component : ExportorderComponent
  },
  {
    path: 'view/:id',
    component : ViewexportorderComponent
  },
  {
    path: 'preview',
    component : ViewexportorderComponent
  },
  {
    path : 'add',
    component : AddeditexportorderComponent
  },
  {
    path : 'edit/:id',
    component : AddeditexportorderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportorderRoutingModule { }
