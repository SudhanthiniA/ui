import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadletteragainstspiritpurchaserequestComponent } from './uploadletteragainstspiritpurchaserequest.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : UploadletteragainstspiritpurchaserequestComponent
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class uploadletteragainstspiritpurchaserequestRoutingModule { }
