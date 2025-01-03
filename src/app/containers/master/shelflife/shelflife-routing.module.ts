import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelflifeComponent } from './shelflife.component';
import { AddshelflifeComponent } from './addshelflife/addshelflife.component';
import { ViewshelflifeComponent } from './viewshelflife/viewshelflife.component';

const routes: Routes = [
  { path: 'list', component: ShelflifeComponent },
  { path: 'add', component: AddshelflifeComponent },
  { path: 'view', component: ViewshelflifeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelflifeRoutingModule { }
