import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { WholesaleComponent } from './Wholesale.component';


const routes: Routes = [
 
  {
    path : 'fl6',
    loadChildren: () => import('./HBR FL 6/hbrfl6add.module').then(m => m.Hbrfl6addModule)
  },
  {
    path : 'fl7',
    loadChildren: () => import('./HBR FL 7/hbrfl7add.module').then(m => m.Hbrfl7addModule)
  },
  {
    path : 'fl7a',
    loadChildren: () => import('./HBR FL 7A/hbrfl7a-add.module').then(m => m.Hbrfl7aAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HbrRoutingModule { }
