import { Component, OnInit } from '@angular/core';
import { ChartDB } from '@app/containers/fack-db/chart-data';
import { ApexChartService } from '@appThemeShared/components/chart/apex-chart/apex-chart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '@app/services/helpdesk/dashboardservice';

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
  dashboardcountlist: any;
  constructor(public apexEvent: ApexChartService, private dsservice: DashboardService,
    private router: Router, private route: ActivatedRoute) {
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

  ngOnInit() {
    this.getdashboardlist();
  }
  getdashboardlist() {
    this.dsservice.getAlldashboardList().subscribe((responceData: any) => {
      console.log(responceData);
      this.dashboardcountlist = (responceData.status === 's') ? responceData.data : [];
    });
  }
}
