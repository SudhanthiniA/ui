import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentforclosureRoutingModule } from './indentforclosure-routing.module';

import { IndentforclosureComponent } from './indentforclosure.component';
import { AddindentforclosureComponent } from './addindentforclosure/addindentforclosure.component';
import { ViewindentforclosureComponent } from './viewindentforclosure/viewindentforclosure.component';


@NgModule({
  declarations: [IndentforclosureComponent, AddindentforclosureComponent, ViewindentforclosureComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentforclosureRoutingModule
  ]
})
export class IndentforclosureModule { }
