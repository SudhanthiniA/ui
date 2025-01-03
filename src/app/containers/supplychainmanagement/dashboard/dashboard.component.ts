import { Component, OnInit } from '@angular/core';
import { ChartDB } from '../../fack-db/chart-data';
import { ApexChartService } from '@appThemeShared/components/chart/apex-chart/apex-chart.service';
import { Chart } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';
import { DashboardService } from '@app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartDB: any;
  viewData: any;

  constructor(public apexEvent: ApexChartService,private dashboardService: DashboardService) {
    this.chartDB = ChartDB;
  }

  ngOnInit() {
    this.getDashboardDetails()
  }

  /// charts 1 Starts
  public dashboardbarchart = new Chart({
    chart: {
      type: 'bar',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: 'Mollasses Grade', align: 'middle'
      },

      allowDecimals: false,
      labels: {

      },
      categories: ["C-Heavy", "B-Heavy"]

    },
    yAxis: {
      title: {
        text: ''
      },
      allowDecimals: false,
      labels: {
      }

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'line',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned',
      data: [6, 3],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual',
      data: [1, 8],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  //barchat 1 ends

  public dashboardbarchartentdisreport = new Chart({
    chart: {
      type: 'pie',
      height: '400',
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: true,
          color: 'blue',
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: "red"

          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['', 45.0],
        ['', 26.8],
        //  {
        //     name: '',
        //     y: 12.8,
        //     sliced: true,
        //     selected: true
        //  },
        ['', 8.5],

      ]
    }]
  });
  // pie chart 1 ends
  public dashboardbarchartbgreport = new Chart({
    chart: {
      type: 'pie',
      height: '400',
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    // xAxis: {
    //   title:{
    //     text: 'Mollasses Grade', align: 'middle'
    //   },

    //   allowDecimals: false,
    //   labels: {

    //   },
    //   categories:["C-Heavy", "B-Heavy"]

    // },
    // yAxis: {
    //   title: {
    //     text: ''
    //   },
    //   allowDecimals: false,
    //   labels: {
    //   }

    // },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {

          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['', 33.0],
        ['', 21.8],
        //  {
        //     name: '',
        //     y: 12.8,
        //     sliced: true,
        //     selected: true
        //  },
        ['', 18.5],

      ]
    }]
  });
  // pie chart 2 ends
  public dashboardbarcharts = new Chart({
    chart: {
      type: 'column',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: ''
      },
      categories: ["C-Heavy", "B-Heavy", "below grade", "Burnt"],

      allowDecimals: false,
      labels: {

      },

    },
    yAxis: {
      title: {
        text: 'In Quintals', align: 'middle'
      },
      allowDecimals: false,
      categories: ["1", "2", "3", "4"],

      labels: {
      }

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'line',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned',
      data: [1, 3, 2, 4],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual',
      data: [1, 4, 2, 3],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  /// column charts 2 ended
  public dashboardbarchartproreport = new Chart({
    chart: {
      type: 'column',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: ''
      },
      categories: ["Cane Crushed", "Sugar", "Mollasses", "Cane Juice"],

      allowDecimals: false,
      labels: {

      },

    },
    yAxis: {
      title: {
        text: 'In Quintals', align: 'middle'
      },
      allowDecimals: false,
      categories: ["1C", "2C", "3C", "4C"],

      labels: {
      }

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'line',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned Production',
      data: [1, 3, 2, 1],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual Production',
      data: [1, 3, 2, 3],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  /// bar chart 5 ended


  public dashboardbarchartres_vs_unres = new Chart({
    chart: {
      type: 'bar',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: 'Mollasses Production', align: 'middle'
      },

      allowDecimals: false,
      labels: {

      },
      categories: ["Reserved", "Unreserved", "Deviation"]

    },
    yAxis: {
      title: {
        text: ''
      },
      allowDecimals: false,
      labels: {
      }

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'line',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned',
      data: [6, 3, 2],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual',
      data: [2, 8, 3],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  ////bar chart 7 end
  public dashboardbarchartcaptive = new Chart({
    chart: {
      type: 'column',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: 'In Quintals'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      labels: {

      },
      categories: ["Capitive Disapatch", "Non capitive Dispatch"],

    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
      }

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'bar',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned',
      data: [1, 2],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual',
      data: [3, 4],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  //////////////////// column  chart last ends

  // public dashboardlinecgart = new Chart({
  //   chart: {
  //     type: 'spline',
  //     height: '400',
  //   },
  //   accessibility: {},
  //   title: {
  //     text: ''
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   xAxis: {
  //     title:{
  //       text: 'Mollasses Grade', align: 'middle'
  //     },

  //     allowDecimals: false,
  //     labels: {

  //     },
  //     categories:["2017-2018", "2018-2019","2019-2020"]

  //   },
  //   yAxis: {
  //     title: {
  //       text: ''
  //     },
  //     allowDecimals: false,
  //     labels: {
  //     },
  //     categories:["1L", "2L","3L","4L","5L","6L","7L","8L","9L"]

  //   },
  //   // tooltip: {
  //   // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  //   // },
  //   tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
  //       '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true
  //   },
  //   legend: {
  //     symbolRadius: 0
  //   },
  //   plotOptions: {
  //     areaspline: {
  //       marker: {
  //         enabled: false,
  //         symbol: 'line',
  //         radius: 2,
  //         states: {
  //           hover: {
  //             enabled: true
  //           }
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     type: undefined,
  //     name: 'Planned',
  //     data: [6,3],
  //     color: '#5CB38B',


  ///Line chart Starts 

  public LinechartDashbord = new Chart({
    chart: {
      type: 'line',
      height: '400',
      width: '450'
    },
    accessibility: {},
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: ''
      },

      allowDecimals: false,
      labels: {

      },
      categories: ["2017-2018", "2018-2019", "2019-2020"]

    },
    yAxis: {
      title: {
        text: 'In Quintals', align: 'middle'
      },
      allowDecimals: false,
      labels: {
      },
      // categories:["2L","4L","6L","8L","10L","12L"]

    },
    // tooltip: {
    // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    // },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:#000000;padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    legend: {
      symbolRadius: 0
    },
    plotOptions: {
      areaspline: {
        marker: {
          enabled: false,
          symbol: 'line',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      type: undefined,
      name: 'Planned',
      data: [6, 3, 2],
      color: '#5CB38B',

    },
    {
      type: undefined,
      name: 'Actual',
      data: [2, 8, 3],
      color: 'rgba(0,102,204,0.5)'
    },
    {
      type: undefined,
      name: 'Deficit',
      data: [1, 3, 5],
      color: 'rgba(0,102,204,0.5)'
    },
    ]
  });
  getDashboardDetails() {
    this.dashboardService.getDashboard().subscribe(responceData => {
      if (responceData.status == 's') {
        this.viewData = responceData.data;
      }
    })
  }
}