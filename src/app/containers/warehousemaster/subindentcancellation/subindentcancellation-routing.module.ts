import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubindentcancellationComponent } from './subindentcancellation.component';
import { AddtpackComponent } from './addtpack/addtpack.component';
import { ViewtpackComponent } from './viewtpack/viewtpack.component';


const routes: Routes = [
  { path: 'add', component: AddtpackComponent },
  { path: 'view', component: ViewtpackComponent },
  { path: 'list', component: SubindentcancellationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubindentcancellationRoutingModule { }
