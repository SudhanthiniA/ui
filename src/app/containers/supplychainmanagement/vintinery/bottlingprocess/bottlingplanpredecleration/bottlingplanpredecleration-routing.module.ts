import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingplanpredeclerationComponent } from './bottlingplanpredecleration.component';
import { ViewbottlingplanpredeclerationComponent } from './viewbottlingplanpredecleration/viewbottlingplanpredecleration.component';
import { AddbottlingplanpredeclerationComponent } from './addbottlingplanpredecleration/addbottlingplanpredecleration.component';

const routes: Routes = [
  { path: 'list', component: BottlingplanpredeclerationComponent},
  {path: 'add', component: AddbottlingplanpredeclerationComponent},
  {path: 'view', component: ViewbottlingplanpredeclerationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingplanpredeclerationRoutingModule { }
