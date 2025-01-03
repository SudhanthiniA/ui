import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductiondeclarationComponent } from './productiondeclaration.component';
import { AddproductiondeclarationComponent } from './addproductiondeclaration/addproductiondeclaration.component';
import { ViewproductiondeclarationComponent } from './viewproductiondeclaration/viewproductiondeclaration.component';
import { ApprovalComponent } from './approval/approval.component';


const routes: Routes = [ 
  
  {
    path : 'list',
    component : ProductiondeclarationComponent
  },
  {
    path : 'add',
    component : AddproductiondeclarationComponent
  },
  {
    path : 'view',
    component : ViewproductiondeclarationComponent
  },
  {
    path : 'approval',
    component : ApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductiondeclarationRoutingModule { }
