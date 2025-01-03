import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeprintingComponent } from './qrcodeprinting.component';
import { AddqrcodeprintingComponent } from './addqrcodeprinting/addqrcodeprinting.component';
import { ViewqrcodeprintingComponent } from './viewqrcodeprinting/viewqrcodeprinting.component';

const routes: Routes = [
  {
    path : 'list',
    component : QrcodeprintingComponent
  },
  {
    path : 'edit',
    component : AddqrcodeprintingComponent
  },
  {
    path: 'view',
    component : ViewqrcodeprintingComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodeprintingRoutingModule { }
