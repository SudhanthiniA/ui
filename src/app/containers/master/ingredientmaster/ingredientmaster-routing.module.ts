import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientmasterComponent } from './ingredientmaster.component';
import { AddeditingredientComponent } from './addeditingredient/addeditingredient.component';
import { ViewingredientComponent } from './viewingredient/viewingredient.component';


const routes: Routes = [
  {
    path: 'list',
    component: IngredientmasterComponent
  },
  {
    path: 'add',
    component: AddeditingredientComponent
  },
  {
    path : 'edit/:Id',
    component: AddeditingredientComponent
  },
  {
    path : 'view/:Id',
    component : ViewingredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientmasterRoutingModule { }
