import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LicensetemplateuploadComponent } from './licensetemplateupload.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : '',
    component : LicensetemplateuploadComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'edit/:id',
    component : AddComponent
  },
  {
    path : 'view/:id',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensetemplateuploadRoutingModule { }
