import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarqrwastageComponent } from './barqrwastage.component';
import { AddbarqrwastageComponent } from './addbarqrwastage/addbarqrwastage.component';
import { ViewbarqrwastageComponent } from './viewbarqrwastage/viewbarqrwastage.component';

const routes: Routes = [
  { path: 'list', component: BarqrwastageComponent},
  {path: 'add', component: AddbarqrwastageComponent},
  {path: 'view', component: ViewbarqrwastageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarqrwastageRoutingModule { }
