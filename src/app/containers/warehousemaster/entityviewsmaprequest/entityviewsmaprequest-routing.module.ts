import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityviewsmaprequestComponent } from './entityviewsmaprequest.component';
import { MwhprofileviewComponent } from './mwhprofileview/mwhprofileview.component';


const routes: Routes = [
  { path: 'view', component: EntityviewsmaprequestComponent },
  { path: 'profile', component: MwhprofileviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityviewsmaprequestRoutingModule { }
