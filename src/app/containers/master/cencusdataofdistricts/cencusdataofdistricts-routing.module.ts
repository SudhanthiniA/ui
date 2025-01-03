import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CencusdataofdistrictsComponent } from './cencusdataofdistricts.component';
import { AddeditcencusdataofdistrictsComponent } from './addeditcencusdataofdistricts/addeditcencusdataofdistricts.component';
import { ViewcencusdataofdistrictsComponent } from './viewcencusdataofdistricts/viewcencusdataofdistricts.component';


const routes: Routes = [
  {
    path: 'list',
    component: CencusdataofdistrictsComponent
  },
  {
    path: 'add',
    component: AddeditcencusdataofdistrictsComponent
  },
  {
    path : 'edit/:Id',
    component: AddeditcencusdataofdistrictsComponent
  },
  {
    path : 'view/:Id',
    component : ViewcencusdataofdistrictsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CencusdataofdistrictsRoutingModule { }
