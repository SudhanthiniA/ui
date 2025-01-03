import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DelinkconverofbottlinglineRoutingModule } from './delinkconverofbottlingline-routing.module';
import { DelinkconverofbottlinglineComponent } from './delinkconverofbottlingline.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DelinklistComponent } from './delinklist/delinklist.component';

@NgModule({
  declarations: [DelinkconverofbottlinglineComponent, AddComponent, ViewComponent, DelinklistComponent],
  imports: [
    CommonModule,
    SharedModule,
    DelinkconverofbottlinglineRoutingModule
  ]
})
export class DelinkconverofbottlinglineModule { }
