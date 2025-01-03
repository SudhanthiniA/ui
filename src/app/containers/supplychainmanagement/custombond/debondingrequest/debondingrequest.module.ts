import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DebondingrequestRoutingModule } from './debondingrequest-routing.module';
import { DebondingrequestComponent } from './debondingrequest.component';
import { AdddebondingrequestComponent } from './adddebondingrequest/adddebondingrequest.component';
import { ViewdebondingrequestComponent } from './viewdebondingrequest/viewdebondingrequest.component';

@NgModule({
  declarations: [DebondingrequestComponent, AdddebondingrequestComponent, ViewdebondingrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    DebondingrequestRoutingModule
  ]
})
export class DebondingrequestModule { }
