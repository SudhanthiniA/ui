import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductiondeclarationComponent } from './productiondeclaration.component';
import { AddproductiondeclarationComponent } from './addproductiondeclaration/addproductiondeclaration.component';
import { ViewproductiondeclarationComponent } from './viewproductiondeclaration/viewproductiondeclaration.component';

const routes: Routes = [
  {
    path : 'list',
    component : ProductiondeclarationComponent
  },
  {
    path : 'edit',
    component : AddproductiondeclarationComponent
  },
  {
    path: 'view',
    component : ViewproductiondeclarationComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductiondeclarationRoutingModule { }
