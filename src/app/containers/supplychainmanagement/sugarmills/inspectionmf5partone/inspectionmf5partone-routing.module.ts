import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Inspectionmf5partoneComponent } from './inspectionmf5partone.component';
import { Addeditinspectionmf5partoneComponent } from './addeditinspectionmf5partone/addeditinspectionmf5partone.component';
import { Viewinspectionmf5partoneComponent } from './viewinspectionmf5partone/viewinspectionmf5partone.component';


const routes: Routes = [

  {
    path : 'list',
    component : Inspectionmf5partoneComponent
  },
  {
    path : 'add',
    component : Addeditinspectionmf5partoneComponent
  },
  {
    path : 'edit/:Id',
    component : Addeditinspectionmf5partoneComponent
  },
  {
    path : 'view/:Id',
    component : Viewinspectionmf5partoneComponent
  },
  {
    path : 'preview',
    component : Viewinspectionmf5partoneComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Inspectionmf5partoneRoutingModule { }
