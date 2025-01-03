import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Addpd25PipilineComponent } from './addpd25-pipiline/addpd25-pipiline.component';
import { Viewpd25PipilineComponent } from './viewpd25-pipiline/viewpd25-pipiline.component';
import { Acknowledgementpd25PipilineComponent } from './acknowledgementpd25-pipiline/acknowledgementpd25-pipiline.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pd25PipilineRoutingModule } from './pd25-pipiline-routing.module';
import { Pd25PipilineComponent } from './pd25-pipiline.component';

@NgModule({
  declarations: [Pd25PipilineComponent, Addpd25PipilineComponent, Viewpd25PipilineComponent, Acknowledgementpd25PipilineComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd25PipilineRoutingModule
  ]
})
export class Pd25PipilineModule { }
