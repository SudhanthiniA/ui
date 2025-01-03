import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideodatabackupComponent } from './videodatabackup.component';
import { AddvideodatabackupComponent } from './addvideodatabackup/addvideodatabackup.component';
import { ViewvideodatabackupComponent } from './viewvideodatabackup/viewvideodatabackup.component';

const routes: Routes = [
  {
    path: 'list',
    component: VideodatabackupComponent
  },
  {
    path: 'add',
    component: AddvideodatabackupComponent
  },
  {
    path: 'view',
    component: ViewvideodatabackupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideodatabackupRoutingModule { }
