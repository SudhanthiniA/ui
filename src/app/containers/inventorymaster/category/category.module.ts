import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { AddeditcategoryComponent } from './addeditcategory/addeditcategory.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategoryComponent,
    AddeditcategoryComponent,
    ViewcategoryComponent
  ],
  imports: [
    CategoryRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class CategoryModule { }
