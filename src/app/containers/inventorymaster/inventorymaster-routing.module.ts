import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryModule)
  },
  {
    path: 'subcategory',
    loadChildren: () => import('./subcategory/subcategory.module').then( m => m.SubcategoryModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./producttype/producttype.module').then( m => m.ProducttypeModule)
  },
  {
    path: 'subproduct',
    loadChildren: () => import('./subproduct/subproduct.module').then( m => m.SubproductModule)
  },
  {
    path: 'uom',
    loadChildren: () => import('./uom/uom.module').then( m => m.UomModule)
  },
  {
    path: 'gstmaster',
    loadChildren: () => import('./gstmaster/gstmaster.module').then(m => m.GstmasterModule)
  },
  {
    path: 'storemaster',
    loadChildren: () => import('./storemaster/storemaster.module').then( m => m.StoremasterModule)
  },
  {
    path: 'itemmaster',
    loadChildren : () => import('./itemmaster/itemmaster.module').then(m => m.ItemmasterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorymasterRoutingModule { }
