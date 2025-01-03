import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportindentliquorComponent } from './exportindentliquor.component';
import { AddexportindentliquorComponent } from './addexportindentliquor/addexportindentliquor.component';
import { ViewexportindentliquorComponent } from './viewexportindentliquor/viewexportindentliquor.component';


const routes: Routes = [

  {
    path : 'list',
    component : ExportindentliquorComponent
  },
  {
    path: 'view',
    component : ViewexportindentliquorComponent
  },
  {
    path : 'add',
    component : AddexportindentliquorComponent
  },
  {
    path : 'preview',
    component : ViewexportindentliquorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportindentliquorRoutingModule { }
