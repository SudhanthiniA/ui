import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddedpcategoryComponent } from './addedpcategory/addedpcategory.component';
import { ViewedpcategoryComponent } from './viewedpcategory/viewedpcategory.component';
import { EdpcategoryComponent } from './edpcategory.component';

const routes: Routes = [
  { path: 'list', component: EdpcategoryComponent },
  { path: 'add', component: AddedpcategoryComponent },
  { path: 'view', component: ViewedpcategoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdpcategoryRoutingModule { }
