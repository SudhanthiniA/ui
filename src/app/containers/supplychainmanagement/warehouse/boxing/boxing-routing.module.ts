import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxingComponent } from './boxing.component';
import { AddboxingComponent } from './addboxing/addboxing.component';
import { ViewboxingComponent } from './viewboxing/viewboxing.component';

const routes: Routes = [{ path:'list', component: BoxingComponent },
                        { path:'add', component: AddboxingComponent},
                        { path:'view/:id', component: ViewboxingComponent},
                        { path:'edit/:id/:status', component: AddboxingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxingRoutingModule { }
