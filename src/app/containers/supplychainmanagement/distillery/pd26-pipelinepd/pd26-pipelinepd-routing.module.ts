import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd26PipelinepdComponent } from './pd26-pipelinepd.component';
import { Addpd26PipelinepdComponent } from './addpd26-pipelinepd/addpd26-pipelinepd.component';
import { Viewpd26PipelinepdComponent } from './viewpd26-pipelinepd/viewpd26-pipelinepd.component';
import { Acknownledgementpd26PipelinepdComponent } from './acknownledgementpd26-pipelinepd/acknownledgementpd26-pipelinepd.component';

const routes: Routes = [{ path: 'list', component: Pd26PipelinepdComponent },
{ path: 'add', component: Addpd26PipelinepdComponent },
{ path: 'view', component: Viewpd26PipelinepdComponent },
{ path: 'acknownladge', component: Acknownledgementpd26PipelinepdComponent }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd26PipelinepdRoutingModule { }
