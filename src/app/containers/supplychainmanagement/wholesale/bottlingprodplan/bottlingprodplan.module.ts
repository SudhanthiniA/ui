import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingprodplanRoutingModule } from './bottlingprodplan-routing.module';
import { BottlingprodplanComponent } from './bottlingprodplan.component';
import { AddbottlingprodplanComponent } from './addbottlingprodplan/addbottlingprodplan.component';
import { ViewbottlingprodplanComponent } from './viewbottlingprodplan/viewbottlingprodplan.component';

@NgModule({
  declarations: [BottlingprodplanComponent, AddbottlingprodplanComponent, ViewbottlingprodplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingprodplanRoutingModule
  ]
})
export class BottlingprodplanModule { }
