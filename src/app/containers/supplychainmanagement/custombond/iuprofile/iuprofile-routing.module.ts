import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IuprofileComponent } from './iuprofile.component';
import { ViewiuprofileComponent } from './viewiuprofile/viewiuprofile.component';

const routes: Routes = [
  { path: 'list', component: IuprofileComponent }, 
  { path: 'view', component: ViewiuprofileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IuprofileRoutingModule { }
