import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'molasses',
   loadChildren: () => import('./molasses/molasses.module').then(m => m.MolassesModule)
  },
  { path: 'liquor',
   loadChildren: () => import('./liquor/liquor.module').then(m => m.LiquorModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquorIndentmanagementRoutingModule { }
