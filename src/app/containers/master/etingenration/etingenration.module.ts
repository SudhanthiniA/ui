import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtingenrationRoutingModule } from './etingenration-routing.module';
import { EtingenrationComponent } from './etingenration.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { EtinaddComponent } from './etinadd/etinadd.component';
import { EtinviewComponent } from './etinview/etinview.component';


@NgModule({
  declarations: [EtingenrationComponent, EtinaddComponent, EtinviewComponent],
  imports: [
    CommonModule,
    EtingenrationRoutingModule,
    SharedModule
  ]
})
export class EtingenrationModule { }
