import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingplanComponent } from './bottlingplan.component';
import { ViewbottlingplanComponent } from './viewbottlingplan/viewbottlingplan.component';
import { AddeditbottlingplanComponent } from './addeditbottlingplan/addeditbottlingplan.component';

const routes: Routes = [{ path: 'list', component: BottlingplanComponent },
                        { path: 'add', component: AddeditbottlingplanComponent},
                        { path: 'view/:Id', component: ViewbottlingplanComponent},
                        { path: 'edit/:Id', component: AddeditbottlingplanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingplanRoutingModule { }
