import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingfeesregisterRoutingModule} from './bottlingfeesregister-routing.module';
import { BottlingfeesregisterComponent } from './bottlingfeesregister.component';
import { AddbottlingfeesregisterComponent } from './addbottlingfeesregister/addbottlingfeesregister.component';
import { ViewbottlingfeesregisterComponent } from './viewbottlingfeesregister/viewbottlingfeesregister.component';
 
@NgModule({
  declarations: [BottlingfeesregisterComponent, AddbottlingfeesregisterComponent,ViewbottlingfeesregisterComponent],
  imports: [
    CommonModule,
    BottlingfeesregisterRoutingModule,
    SharedModule
  ]
})
export class BottlingfeesregisterModule { }
