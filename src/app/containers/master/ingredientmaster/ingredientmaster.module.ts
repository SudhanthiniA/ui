import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientmasterRoutingModule } from './ingredientmaster-routing.module';
import { IngredientmasterComponent } from './ingredientmaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditingredientComponent } from './addeditingredient/addeditingredient.component';
import { ViewingredientComponent } from './viewingredient/viewingredient.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [IngredientmasterComponent, AddeditingredientComponent, ViewingredientComponent],
  imports: [
    CommonModule,
    SharedModule,
    IngredientmasterRoutingModule,
    DataTablesModule
  ]
})
export class IngredientmasterModule { }
