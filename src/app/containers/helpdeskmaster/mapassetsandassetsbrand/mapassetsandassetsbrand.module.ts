import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { MapassetsandassetsbrandRoutingModule } from './mapassetsandassetsbrand-routing.module';
import { MapassetsandassetsbrandComponent } from './/mapassetsandassetsbrand.component';
import { AddmapassetsandassetsbrandComponent } from './addmapassetsandassetsbrand/addmapassetsandassetsbrand.component';
import { ViewmapassetsandassetsbrandComponent } from './viewmapassetsandassetsbrand/viewmapassetsandassetsbrand.component';



@NgModule({
  declarations: [MapassetsandassetsbrandComponent, AddmapassetsandassetsbrandComponent, ViewmapassetsandassetsbrandComponent],
  imports: [
    SharedModule,
    CommonModule,
    MapassetsandassetsbrandRoutingModule
  ]
})
export class MapassetsandassetsbrandModule { }
