import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: 'bottlingprodplan',
  loadChildren: () => import('./bottlingprodplan/bottlingprodplan.module').then(module => module.BottlingprodplanModule)
},
{
  path: 'movementoffinishedgoods',
  loadChildren: () => import('./movementoffinishedgoods/movementoffinishedgoods.module').then(module => module.MovementoffinishedgoodsModule)
},
{
  path: 'brandlabelregws',
  loadChildren: () => import('./brandlabelregws/brandlabelregws.module').then(module => module.BrandlabelregwsModule)
},
{
  path: 'brandlabeloverview',
  loadChildren: () => import('./brandlabeloverview/brandlabeloverview.module').then(module => module.BrandlabeloverviewModule)
},
{
  path: 'qrcodewastage',
  loadChildren: () => import('./qrcodewastage/qrcodewastage.module').then(module => module.QrcodewastageModule)
},
{
  path: 'dispatch',
  loadChildren: () => import('./dispatchparentunitold/dispatchparentunit.module').then(module => module.DispatchparentunitModule)
},
{
  path: 'processingwastage',
  loadChildren: () => import('./processingwastage/processingwastage.module').then(module => module.ProcessingwastageModule)
},
{
  path: 'declarationofplan',
  loadChildren: () => import('./declarationofplan/declarationofplan.module').then(module => module.DeclarationofplanModule)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentunitRoutingModule { }
