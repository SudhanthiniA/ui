import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Indentfl11aComponent } from './indentfl11a.component';
import { Viewindentfl11aComponent } from './viewindentfl11a/viewindentfl11a.component';

const routes: Routes = [ 
  {
    path : 'view',
    component : Viewindentfl11aComponent
  },
  {
    path : 'list',
    component : Indentfl11aComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Indentfl11aRoutingModule { }
