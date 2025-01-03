import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Viewindentfl11aComponent } from './viewindentfl11a/viewindentfl11a.component';
import { Indentfl11aRoutingModule } from './indentfl11a-routing.module';
import { Indentfl11aComponent } from './indentfl11a.component';  

@NgModule({
  declarations: [Indentfl11aComponent, Viewindentfl11aComponent],
  imports: [
    CommonModule,
    SharedModule,
    Indentfl11aRoutingModule
  ]
})
export class Indentfl11aModule { }

