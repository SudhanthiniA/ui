import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ProfilecbRoutingModule } from './profilecb-routing.module';
import { ProfilecbComponent } from './profilecb.component';

@NgModule({
  declarations: [ProfilecbComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfilecbRoutingModule
  ]
})
export class ProfilecbModule { }
