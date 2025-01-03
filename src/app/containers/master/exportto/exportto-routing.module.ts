import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExporttoComponent } from './exportto.component';
import { AddexporttoComponent } from './addexportto/addexportto.component';
import { ViewexporttoComponent } from './viewexportto/viewexportto.component';


const routes: Routes = [
  {
    path: 'list',
    component: ExporttoComponent
  },
  {
    path: 'add',
    component: AddexporttoComponent
  },
  {
    path : 'view',
    component: ViewexporttoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExporttoRoutingModule { }
