import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'district',
        loadChildren: () => import('./district/district.module').then(module => module.DistrictModule)
      },
      {
        path: 'state',
        loadChildren: () => import('./state/state.module').then(module => module.StateModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.CountryModule)
      },
      {
        path: 'taluk',
        loadChildren: () => import('./taulk/taulk.module').then(m => m.TaulkModule)
      },
      {
        path: 'village',
        loadChildren: () => import('./village/village.module').then(m => m.VillageModule)
      },
      {
        path: 'block',
        loadChildren: () => import('./block/block.module').then(m => m.BlockModule)
      },
      {
        path: 'municipality',
        loadChildren: () => import('./municipality/municipality.module').then(m => m.MunicipalityModule)
      },
      {
        path: 'corporation',
        loadChildren: () => import('./corporation/corporation.module').then(m => m.CorporationModule)
      },
      { path: 'location',
      loadChildren: () => import('./location/location.module').then(m => m.LocationModule) }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationMasterPageRoutingModule { }
