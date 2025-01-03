import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthlystockComponent } from './monthlystock.component';
import { AddmonthlystockComponent } from './addmonthlystock/addmonthlystock.component';
import { ViewmonthlystockComponent } from './viewmonthlystock/viewmonthlystock.component';

const routes: Routes = [
  { 
    path: 'list',
     component: MonthlystockComponent 
    },
    { 
      path: 'add',
       component: AddmonthlystockComponent 
      },
  {
    path: 'view',
    component: ViewmonthlystockComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlystockRoutingModule { }
