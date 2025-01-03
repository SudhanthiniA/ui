import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingproductionplanComponent } from './bottlingproductionplan.component';
import { AddbottlingprodplanComponent } from './addbottlingprodplan/addbottlingprodplan.component';
import { ViewbottlingprodplanComponent } from './viewbottlingprodplan/viewbottlingprodplan.component';
import { ApprovematrixprodplanComponent } from './approvematrixprodplan/approvematrixprodplan.component';
import { ApprovematrixprodplanlistComponent } from './approvematrixprodplanlist/approvematrixprodplanlist.component';

const routes: Routes = [
  {
    path : 'list',
    component: BottlingproductionplanComponent
  },
  {
    path: 'add',
    component: AddbottlingprodplanComponent
  },
  {
    path: 'view',
    component: ViewbottlingprodplanComponent
  },
  {
    path: 'approve',
    component: ApprovematrixprodplanComponent
  },
  {
    path: 'approvelist',
    component: ApprovematrixprodplanlistComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingproductionplanRoutingModule { }
