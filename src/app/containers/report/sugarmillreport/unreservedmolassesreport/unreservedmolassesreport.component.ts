import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApiService, UtilsService } from '@app/services';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-unreservedmolassesreport',
  templateUrl: './unreservedmolassesreport.component.html',
  styleUrls: ['./unreservedmolassesreport.component.scss']
})

export class UnreservedmolassesreportComponent implements OnInit {

  unreservemolassesreport: any[] = [];
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
    this.getIndentRequest();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100]
    };
  }

  getIndentRequest() {
    this.apiService.get('unreservemolassesreport').then((responceData: any[]) => {
      console.log(responceData);
      this.unreservemolassesreport = responceData;
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
    body1.push([{}, { text: 'Rate Details of Un-reserved Molasses Report', alignment: 'center'}, {}]);
    body1.push([{}, { text: '.', alignment: 'center', style: 'transparent' }, {}]);
    // body1.push([{}, { text: '.', alignment: 'center', style: 'transparent' }, {}]);

    // table 2

    // var body2 = [];
    // body2.push([{}, { text: 'From Date:', alignment: 'right' }, { text: this.dataService.getViewDateTime24Hrs( this.startDateSlection), alignment: 'left' },
    // { text: 'To Date:', alignment: 'right' }, { text: this.dataService.getViewDateTime24Hrs( this.endDateSlection), alignment: 'left' }, {}]);
    // table 3
    const body2 = [];

    body2.push(
      [
        {
        text: 'S.No',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Indent',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },

      {
        text: 'Sugar Mill Name',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Rate',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Alloted',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Lifted',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Cost-Alloted',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Cost-Lifted',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      }



      ]
    );
    // dynamic row push
    for (const key in this.unreservemolassesreport) {
      if (this.unreservemolassesreport.hasOwnProperty(key)) {
        const ipdayKey = this.unreservemolassesreport[key];
        const dateArray = new Array();
        const sNo = parseInt(key) + 1;
        // this.totalsno = sNo === this.serialnum -1? '': sNo + 1
        dateArray.push(sNo);
        dateArray.push(ipdayKey.indent);
        dateArray.push(ipdayKey.date);
        dateArray.push(ipdayKey.sugarmillname);
        dateArray.push(ipdayKey.rate);
        dateArray.push(ipdayKey.alloted);
        dateArray.push(ipdayKey.lifted);
        dateArray.push(ipdayKey.costalloted);
        dateArray.push(ipdayKey.costlifted);
        body2.push(dateArray);
      }
    }

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
        //     widths: ['5%', '20%', '25%', '10%', '35%', '5%'],
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

            widths: ['auto', '10%', '12%', '12%', '10%', '12%', '12%', '12%', '13%'],
           headerRows: 1,
            body: body2,

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
    this.utilsSer.createPDF( 'Rate Details of Un-reserved Molasses Report', dateData );
    // pdfMake.createPdf(dateData).download('Rate Details of Un-reserved Molasses Report');
  }

  // xls Download
  generateXls() {
    /* table id is passed over here */
    const element = document.getElementById('excel_data');
    this.utilsSer.createXLSX( 'Rate Details of Un-reserved Molasses Report.xlsx', element );
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // /* save to file */
    // XLSX.writeFile(wb, 'Rate Details of Un-reserved Molasses Report.xlsx');
  }

}
