import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingproductionplanRoutingModule } from './bottlingproductionplan-routing.module';
import { BottlingproductionplanComponent } from './bottlingproductionplan.component';
import { AddbottlingprodplanComponent } from './addbottlingprodplan/addbottlingprodplan.component';
import { ViewbottlingprodplanComponent } from './viewbottlingprodplan/viewbottlingprodplan.component';
import { ApprovematrixprodplanComponent } from './approvematrixprodplan/approvematrixprodplan.component';
import { ApprovematrixprodplanlistComponent } from './approvematrixprodplanlist/approvematrixprodplanlist.component';


@NgModule({
  declarations: [BottlingproductionplanComponent, AddbottlingprodplanComponent, ViewbottlingprodplanComponent, ApprovematrixprodplanComponent, ApprovematrixprodplanlistComponent],
  imports: [
    CommonModule, 
    SharedModule,
    BottlingproductionplanRoutingModule
  ]
})
export class BottlingproductionplanModule { }
