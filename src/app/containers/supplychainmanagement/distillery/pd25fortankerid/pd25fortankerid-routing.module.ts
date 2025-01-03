import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd25fortankeridComponent } from './pd25fortankerid.component';
import { Addpd25fortankeridComponent } from './addpd25fortankerid/addpd25fortankerid.component';
import { Viewpd25fortankeridComponent } from './viewpd25fortankerid/viewpd25fortankerid.component';
import { Pd26tankeracknowledgementComponent } from './pd26tankeracknowledgement/pd26tankeracknowledgement.component';
import { Pd26tankeracknowledgementaecComponent } from './pd26tankeracknowledgementaec/pd26tankeracknowledgementaec.component';

const routes: Routes = [{ path: 'list', component: Pd25fortankeridComponent },
{ path: 'add', component: Addpd25fortankeridComponent },
{ path: 'edit', component: Addpd25fortankeridComponent },
{ path: 'preview', component: Viewpd25fortankeridComponent },
{ path: 'view', component: Viewpd25fortankeridComponent },
{ path: 'acknowledgement', component: Pd26tankeracknowledgementComponent },
{ path: 'acknowledgementaec', component: Pd26tankeracknowledgementaecComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd25fortankeridRoutingModule { }
