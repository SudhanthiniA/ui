import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
    path: 'indentmetallurgy',
    loadChildren: () => import('./indentmetallurgy/indentmetallurgy.module').then(m => m.IndentmetallurgyModule)
  },
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FoundryindustrieswithupRoutingModule { }
