import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EalrequestmappedRoutingModule } from './ealrequestmapped-routing.module';
import { EalrequestmappedComponent } from './ealrequestmapped.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';
import { UnmappedaddComponent } from './unmappedadd/unmappedadd.component';
import { DeomappedComponent } from './deomapped/deomapped.component';
import { DeounmappedComponent } from './deounmapped/deounmapped.component';

@NgModule({
  declarations: [EalrequestmappedComponent, AddComponent, ViewComponent, UnmappedviewComponent, UnmappedaddComponent, DeomappedComponent, DeounmappedComponent],
  imports: [
    CommonModule,
    SharedModule,
    EalrequestmappedRoutingModule
  ]
})
export class EalrequestmappedModule { }
