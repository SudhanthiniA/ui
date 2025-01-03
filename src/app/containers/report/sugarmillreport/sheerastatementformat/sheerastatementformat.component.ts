import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApiService, UtilsService } from '@app/services';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-sheerastatementformat',
  templateUrl: './sheerastatementformat.component.html',
  styleUrls: ['./sheerastatementformat.component.scss']
})

export class SheerastatementformatComponent implements OnInit {

  sheerastatement: any = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private apiService: ApiService, 
    private global: GlobalService,
    private utilsSer: UtilsService
  ) { }

  ngOnInit() {
    this.getsheeranidhi();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100]
    };
  }

  getsheeranidhi() {
    this.apiService.get('shreeStatementFormatList').then((responceData: any[]) => {
      console.log(responceData);
      this.sheerastatement = responceData;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  generatePdf() {
    const body1 = [];
    body1.push([{}, {
      image: this.global.upLogo,
      alignment: 'center',
        fit: [70, 70]
    },
    // { text: '.', style: 'transparent' },
    {
      // image:this.global.upLogo,
        // fit: [70, 70], rowSpan: 4
    }]);
    body1.push([{}, { text: 'Excise Department,Government for Utter Pradesh', fontSize: 18, alignment: 'center', uppercase: true, style: 'bold' }, {}]);
    // body1.push([{}, { text:'Government for Utter Pradesh', fontSize: 18, alignment: 'center', uppercase: true, style: 'bold' }, {}]);
    body1.push([{}, { text: 'Sheera Statement Format for Portal Report', alignment: 'center'}, {}]);
    body1.push([{}, { text: '.', alignment: 'center', style: 'transparent' }, {}]);
    // body1.push([{}, { text: '.', alignment: 'center', style: 'transparent' }, {}]);

    // table 2

    // var body2 = [];
    // body2.push([{}, { text: 'From Date:', alignment: 'right' }, { text: this.dataService.getViewDateTime24Hrs( this.startDateSlection), alignment: 'left' },
    // { text: 'To Date:', alignment: 'right' }, { text: this.dataService.getViewDateTime24Hrs( this.endDateSlection), alignment: 'left' }, {}]);
    // table 3
    // var body2 = [];

    // body2.push(
    //   [
    //     {
    //     text: '',
    //     fontSize: 10,
    //     rowSpan:2,
    //     alignment: 'center',
    //     fillColor:'#cccccc',
    //     bold: true
    //   },
    //   {
    //     text: 'Year 2018-2019',
    //     fontSize: 10,
    //     colSpan:2,
    //     alignment: 'center',
    //     fillColor:'#cccccc',
    //     bold: true
    //   },{},
    //   {
    //     text: 'Year 2019-2020',
    //     fontSize: 10,
    //     colSpan:2,
    //     alignment: 'center',
    //     fillColor:'#cccccc',
    //     bold: true
    //   },{},

    //   {
    //     text: 'Year 2020-2021',
    //     fontSize: 10,
    //     colSpan:2,
    //     alignment: 'center',
    //     fillColor:'#cccccc',
    //     bold: true
    //   },{}
    //   ]
    // );
    // body2.push(
    //   [
    //     {},
    //     {
    //       text: 'B-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     },
    //     {
    //       text: 'C-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     },
    //     {
    //       text: 'B-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     },
    //     {
    //       text: 'C-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     },
    //     {
    //       text: 'B-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     },
    //     {
    //       text: 'C-Heavy',
    //       bold: true,
    //       fontSize: 10,
    //       alignment: 'center',
    //       fillColor:'#cccccc',
    //     }
    //   ]);

    // dynamic row push
    // for (var key in this.sheerastatement) {
    //   if (this.sheerastatement.hasOwnProperty(key)) {
    //     var ipdayKey = this.sheerastatement[key];
    //     var dateArray = new Array();
    //     var sNo = parseInt(key)+1
    //     // this.totalsno = sNo === this.serialnum ? '': sNo + 1
    //     dateArray.push(sNo);
    //     dateArray.push(ipdayKey.sugarmill);
    //     dateArray.push(ipdayKey.openingbalance);
    //     dateArray.push(ipdayKey.productiontilldate);
    //     dateArray.push(ipdayKey.total);
    //     dateArray.push(ipdayKey.consumptioncaptive);
    //     dateArray.push(ipdayKey.consumptionreserved);
    //     dateArray.push(ipdayKey.consumptionunreserved);
    //     dateArray.push(ipdayKey.consumtiontoatal);
    //     dateArray.push(ipdayKey.exportotherstate);
    //     dateArray.push(ipdayKey.wastage);
    //     dateArray.push(ipdayKey.totallifting);
    //     dateArray.push(ipdayKey.reservedgraded);
    //     dateArray.push(ipdayKey.unreservedgrade);
    //     dateArray.push(ipdayKey.gradetotal);
    //     body2.push(dateArray);
    //   }
    // }

    const dateData = {
      pageOrientation: 'landscape',
      // footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
      footer(currentPage, pageCount) {
        return {
          columns: [

            {
              fontSize: 10, margin: [38, 0, 0, 0],
              text: 'Date : ' + new Date().toLocaleString(),
              alignment: 'left'
            },
            {
              fontSize: 10, margin: [0, 0, 40, 0],
              text: [

                {
                  text: 'Page : ' + currentPage.toString() + ' of ' + pageCount,
                }
              ],
              alignment: 'right'
            }
          ]
        };

      },
      // header: function(currentPage, pageCount, pageSize) {
      //   // you can apply any logic and return any valid pdfmake element

      //   return [
      //     { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
      //     { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
      //   ]
      // },
      content: [

        // table 1
        {
          table:
          {
            widths: ['15%', '70%', '15%'],
            headerRows: 1,
            body: body1,
          },

          layout: 'noBorders'
        },
        // table 2
        // {
        //   style: 'dateWrap',
        //   table:
        //   {
        //     widths: ['5%', '20%', '25%', '6%', '35%', '5%'],
        //     headerRows: 1,
        //     body: body2,
        //   },
        //   layout: 'noBorders'
        // },
        // table 3
        {
          headerRows: 1,
          style: 'dynamicWrap',

          table:
          {
            dontBreakRows: true,

            widths: ['*', '13%', '13%', '13%', '13%', '13%', '13%'],
           headerRows: 2,
            body: [
              [
                {
                text: '',
                fontSize: 10,
                rowSpan: 2,
                alignment: 'center',
                fillColor: '#cccccc',
                bold: true
              },
              {
                text: 'Year 2018-2019',
                fontSize: 10,
                colSpan: 2,
                alignment: 'center',
                fillColor: '#cccccc',
                bold: true
              }, {},
              {
                text: 'Year 2019-2020',
                fontSize: 10,
                colSpan: 2,
                alignment: 'center',
                fillColor: '#cccccc',
                bold: true
              }, {},

              {
                text: 'Year 2020-2021',
                fontSize: 10,
                colSpan: 2,
                alignment: 'center',
                fillColor: '#cccccc',
                bold: true
              }, {}




              ],
              [
                {},
                {
                  text: 'B-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                },
                {
                  text: 'C-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                },
                {
                  text: 'B-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                },
                {
                  text: 'C-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                },
                {
                  text: 'B-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                },
                {
                  text: 'C-Heavy',
                  bold: true,
                  fontSize: 10,
                  alignment: 'center',
                  fillColor: '#cccccc',
                }


              ],
              [
                {
                  text: 'Opening Balance',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {
                  text: this.sheerastatement[0].second.cheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.openingbalance,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Production',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {
                  text: this.sheerastatement[0].second.cheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.production,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Total',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {
                  text: this.sheerastatement[0].second.cheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.total,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Captive Supply',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {
                  text: this.sheerastatement[0].second.cheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.creativesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Reserve Supply',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {

                  text: this.sheerastatement[0].second.cheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.reservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Unreserve Supply (UP)',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

                {

                  text: this.sheerastatement[0].second.cheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.unreservesupply,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Export (OUP)',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.exportoi,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Wastage',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Wastage',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.wastage,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Total',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.supplytotal,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Relict',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.relict,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Below Grade',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.belowgrade,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ],
              [
                {
                  text: 'Grade Relict',
                  style: 'tableHeader',
                  alignment: 'left'
                },
                {
                  text: this.sheerastatement[0].first.bheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].first.cheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].second.bheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {

                  text: this.sheerastatement[0].second.cheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.bheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },
                {
                  text: this.sheerastatement[0].third.cheavy.graderelict,
                  style: 'tableHeader',
                  alignment: 'center'
                },

              ]
            ],


          },
          // layout: 'noBorders'
        }
      ],
      styles: {
        transparent: {

          color: 'white'
        },
        table: {
          background: 'yellow' ,
          fillColor(rowIndex, node, columnIndex) {
            return (rowIndex === 0) ? '#0050b8' : null;
            },

        },
        bold: {
          bold: true,
          uppercase: true,
        },
        footerTable: {
          bold: true,
        },
        dateWrap: {
          margin: [0, 20, 0, 0]
        },
        dynamicWrap: {
          margin: [0, 5, 0, 0],
          uppercase: true,
          fontSize: 10,
        }
      },
      defaultStyle: {
        alignment: 'center',
      }
    };
    this.utilsSer.createPDF( 'Sheera Statement Format for Portal Report', dateData );
    // pdfMake.createPdf(dateData).download('Sheera Statement Format for Portal Report');
  }

  // xls Download
  generateXls() {
    /* table id is passed over here */
    const element = document.getElementById('excel_data');
    this.utilsSer.createXLSX( 'Sheera Statement Format for Portal Report.xlsx', element );
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // /* save to file */
    // XLSX.writeFile(wb, 'Sheera Statement Format for Portal Report.xlsx');
  }

}
