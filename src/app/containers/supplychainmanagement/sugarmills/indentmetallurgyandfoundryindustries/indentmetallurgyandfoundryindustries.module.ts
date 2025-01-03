import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndentmetallurgyandfoundryindustriesRoutingModule } from './indentmetallurgyandfoundryindustries-routing.module';
import { IndentmetallurgyandfoundryindustriesComponent } from './indentmetallurgyandfoundryindustries.component';
import { ViewindentmetallurgyandfoundryindustriesComponent } from './viewindentmetallurgyandfoundryindustries/viewindentmetallurgyandfoundryindustries.component';



@NgModule({
  declarations: [IndentmetallurgyandfoundryindustriesComponent, ViewindentmetallurgyandfoundryindustriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentmetallurgyandfoundryindustriesRoutingModule
  ]
})
export class IndentmetallurgyandfoundryindustriesModule { }
