import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cctvinstallation',
    loadChildren: () => import('./cctvinstallation/cctvinstallation.module').then(m => m.CctvinstallationModule)
  },
  {
    path: 'videodatabackup',
    loadChildren: () => import('./videodatabackup/videodatabackup.module').then(m => m.VideodatabackupModule)
  },
  {
    path: 'viewingmonitoringverification',
    loadChildren: () => import('./viewingmonitoringverification/viewingmonitoringverification.module').then(m => m.ViewingmonitoringverificationModule)
  },
  {
    path: 'configurationofsmsmailalert',
    loadChildren: () => import('./configurationofsmsmailalert/configurationofsmsmailalert.module').then(m => m.ConfigurationofsmsmailalertModule)
  },
  {
    path: 'settingofcamerasandlogdetails',
    loadChildren: () => import('./settingofcamerasandlogdetails/settingofcamerasandlogdetails.module').then(m => m.SettingofcamerasandlogdetailsModule)
  },
  {
    path: 'eventandalarm',
    loadChildren: () => import('./eventandalarm/eventandalarm.module').then(m => m.EventandalarmModule)
  },
  {
    path: 'healthmonitoring',
    loadChildren: () => import('./healthmonitoring/healthmonitoring.module').then(m => m.HealthmonitoringModule)
  },
  {
    path: 'resourcestatus',
    loadChildren: () => import('./resourcestatus/resourcestatus.module').then(m => m.ResourcestatusModule)
  },
  {
    path: 'liveview',
    loadChildren: () => import('./liveview/liveview.module').then(m => m.LiveviewModule)
  },
  {
    path: 'logsearch',
    loadChildren: () => import('./logserach/logserach.module').then(m => m.LogserachModule)
  },
  {
    path: 'playback',
    loadChildren: () => import('./playback/playback.module').then(m => m.PlaybackModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CctvRoutingModule { }
