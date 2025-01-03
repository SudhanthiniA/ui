import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingprodplanComponent } from './bottlingprodplan.component';
import { AddbottlingprodplanComponent } from './addbottlingprodplan/addbottlingprodplan.component';
import { ViewbottlingprodplanComponent } from './viewbottlingprodplan/viewbottlingprodplan.component';


const routes: Routes = [ 
  {
    path : 'list',
    component : BottlingprodplanComponent
  },
  {
    path : 'add',
    component : AddbottlingprodplanComponent
  },
  {
    path : 'view',
    component : ViewbottlingprodplanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprodplanRoutingModule { }
