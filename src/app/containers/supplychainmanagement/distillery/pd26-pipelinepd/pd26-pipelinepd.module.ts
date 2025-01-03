import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Pd26PipelinepdRoutingModule } from './pd26-pipelinepd-routing.module';
import { Pd26PipelinepdComponent } from './pd26-pipelinepd.component';
import { Addpd26PipelinepdComponent } from './addpd26-pipelinepd/addpd26-pipelinepd.component';
import { Viewpd26PipelinepdComponent } from './viewpd26-pipelinepd/viewpd26-pipelinepd.component';
import { Acknownledgementpd26PipelinepdComponent } from './acknownledgementpd26-pipelinepd/acknownledgementpd26-pipelinepd.component';



@NgModule({
  declarations: [Pd26PipelinepdComponent, Addpd26PipelinepdComponent, Viewpd26PipelinepdComponent, Acknownledgementpd26PipelinepdComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd26PipelinepdRoutingModule
  ]
})
export class Pd26PipelinepdModule { }
