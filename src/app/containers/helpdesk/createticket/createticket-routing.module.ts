import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateticketComponent} from './createticket.component';


const routes: Routes = [
  { path: '', component: CreateticketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateticketRoutingModule { }
