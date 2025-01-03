import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addpd25PipilineComponent } from './addpd25-pipiline/addpd25-pipiline.component';
import { Viewpd25PipilineComponent } from './viewpd25-pipiline/viewpd25-pipiline.component';
import { Acknowledgementpd25PipilineComponent } from './acknowledgementpd25-pipiline/acknowledgementpd25-pipiline.component';
import { Pd25PipilineComponent } from './pd25-pipiline.component';

const routes: Routes = [{ path: 'list', component: Pd25PipilineComponent },
{ path: 'add', component: Addpd25PipilineComponent },
{ path: 'edit', component: Addpd25PipilineComponent },
{ path: 'preview', component: Viewpd25PipilineComponent },
{ path: 'view', component: Viewpd25PipilineComponent },
{ path: 'acknowledgement', component: Acknowledgementpd25PipilineComponent },  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd25PipilineRoutingModule { }
