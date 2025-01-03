import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DraftTpComponent } from './draft-tp.component';
import { AdddraftTpComponent } from './adddraft-tp/adddraft-tp.component';
import { ViewdraftTpComponent } from './viewdraft-tp/viewdraft-tp.component';
import { DraftTpRoutingModule } from './draft-tp-routing.module';

@NgModule({
  declarations: [DraftTpComponent, AdddraftTpComponent, ViewdraftTpComponent],
  imports: [
    CommonModule,
    SharedModule,
    DraftTpRoutingModule
  ]
})
export class DraftTpModule { }
