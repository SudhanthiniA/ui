import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipalcategoryComponent } from './municipalcategory.component';
import { ViewmunicipalcategoryComponent } from './viewmunicipalcategory/viewmunicipalcategory.component';

const routes: Routes = [
  {
    path : 'list',
    component : MunicipalcategoryComponent
  },
  {
    path : 'view',
    component : ViewmunicipalcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipalcategoryRoutingModule { }
