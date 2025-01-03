import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EthanolindentRoutingModule } from './ethanolindent-routing.module';
import { EthanolindentComponent } from './ethanolindent.component';
import { AddethanolindentComponent } from './addethanolindent/addethanolindent.component';
import { ViewethanolindentComponent } from './viewethanolindent/viewethanolindent.component';

@NgModule({
  declarations: [EthanolindentComponent, AddethanolindentComponent, ViewethanolindentComponent],
  imports: [
    CommonModule,
    SharedModule,
    EthanolindentRoutingModule
  ]
})
export class EthanolindentModule { }
