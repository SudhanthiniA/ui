import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BottlingplanclosureComponent } from './bottlingplanclosure.component';
import { AddbottlingplanclosureComponent } from './addbottlingplanclosure/addbottlingplanclosure.component';
import { ViewbottlingplanclosureComponent } from './viewbottlingplanclosure/viewbottlingplanclosure.component';
import { BottlingplanclosureRoutingModule } from './bottlingplanclosure-routing.module';

@NgModule({
  declarations: [BottlingplanclosureComponent, AddbottlingplanclosureComponent, ViewbottlingplanclosureComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingplanclosureRoutingModule
  ]
})
export class BottlingplanclosureModule { }
