import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTreasuryComponent } from './addtreasury/addtreasury.component';
import { ViewTreasuryComponent } from './viewtreasury/viewtreasury.component';
import { TreasuryComponent } from './treasury.component';

const routes: Routes = [
    {
      path: 'list',
      component: TreasuryComponent
    },
    {
      path: 'add',
      component: AddTreasuryComponent
    },
    {
      path : 'edit/:Id',
      component: AddTreasuryComponent
    },
    {
      path : 'view',
      component : ViewTreasuryComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TreasuryRoutingModule { }
  