import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { WastageofbeerduringbottlingprocessComponent } from './wastageofbeerduringbottlingprocess.component';
import{ WastageofbeerduringbottlingprocessRoutingModule} from './wastageofbeerduringbottlingprocess-routing.module';
import { AddwastageofbeerduringbottlingprocessComponent } from './addwastageofbeerduringbottlingprocess/addwastageofbeerduringbottlingprocess.component';
import { ViewwastageofbeerduringbottlingprocessComponent } from './viewwastageofbeerduringbottlingprocess/viewwastageofbeerduringbottlingprocess.component';


@NgModule({
  declarations: [WastageofbeerduringbottlingprocessComponent, AddwastageofbeerduringbottlingprocessComponent, ViewwastageofbeerduringbottlingprocessComponent],
  imports: [
    CommonModule,
    WastageofbeerduringbottlingprocessRoutingModule,
    SharedModule
  ]
})
export class WastageofbeerduringbottlingprocessModule { }
