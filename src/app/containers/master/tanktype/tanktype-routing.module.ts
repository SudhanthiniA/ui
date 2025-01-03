import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TanktypeComponent } from './tanktype.component';
import { AddedittanktypeComponent } from './addedittanktype/addedittanktype.component';
import { ViewtanktypeComponent } from './viewtanktype/viewtanktype.component';


const routes: Routes = [

  { path: 'list', component: TanktypeComponent },
  { path: 'add', component: AddedittanktypeComponent },
  { path: 'edit/:id', component: AddedittanktypeComponent },
  { path: 'view/:id', component: ViewtanktypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanktypeRoutingModule { }
