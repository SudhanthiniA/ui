import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SacramentalwinepermitComponent } from './sacramentalwinepermit.component';
import { AddsacramentalwinepermitComponent } from './addsacramentalwinepermit/addsacramentalwinepermit.component';
import { ViewsacramentalwinepermitComponent } from './viewsacramentalwinepermit/viewsacramentalwinepermit.component';


const routes: Routes = [
  {
    path : 'list',
    component :SacramentalwinepermitComponent
  },
  {
    path : 'add',
    component :AddsacramentalwinepermitComponent
  },
  {
    path : 'view',
    component :ViewsacramentalwinepermitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacramentalwinepermitRoutingModule { }
