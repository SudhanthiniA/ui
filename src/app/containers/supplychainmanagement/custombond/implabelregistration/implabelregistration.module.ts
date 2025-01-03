import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImplabelregistrationRoutingModule } from './implabelregistration-routing.module';
import { ImplabelregistrationComponent } from './implabelregistration.component';
import { AddimplabelregistrationComponent } from './addimplabelregistration/addimplabelregistration.component';
import { ViewimplabelregistrationComponent } from './viewimplabelregistration/viewimplabelregistration.component';


@NgModule({
  declarations: [ImplabelregistrationComponent, AddimplabelregistrationComponent, ViewimplabelregistrationComponent],
  imports: [
    CommonModule,
    ImplabelregistrationRoutingModule,
    SharedModule
  ]
})
export class ImplabelregistrationModule { }
