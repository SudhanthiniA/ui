import { Component, OnInit } from '@angular/core';
import { ChartDB } from '@app/containers/fack-db/chart-data';
import { ApexChartService } from '@appThemeShared/components/chart/apex-chart/apex-chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;

  constructor(public apexEvent: ApexChartService) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }

  ngOnInit() {}
}
