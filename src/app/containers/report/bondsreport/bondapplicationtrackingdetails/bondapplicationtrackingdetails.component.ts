import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApiService, UtilsService } from '@app/services';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-bondapplicationtrackingdetails',
  templateUrl: './bondapplicationtrackingdetails.component.html',
  styleUrls: ['./bondapplicationtrackingdetails.component.scss']
})
export class BondapplicationtrackingdetailsComponent implements OnInit, OnDestroy {

  bondapplicationtrackingdetailslist: any[] = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private apiService: ApiService,
    private global: GlobalService,
    private utilsSer: UtilsService
  ) {
    console.log('test-variable');
    console.log(this.utilsSer.test);
  }

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
    this.apiService.get('bondapplicationtrackingdetails').then((responceData: any[]) => {
      console.log(responceData);
      this.bondapplicationtrackingdetailslist = responceData;
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
    body1.push([{}, { text: 'U.P. Bond Application Tracking Details', alignment: 'center'}, {}]);
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
        text: 'Application ID',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Application Name',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },

      {
        text: 'Firm Name',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Type',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'District',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Application Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Document Updation Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Digital Sign Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Processing Payment Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Processing Approval Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Godown Updation Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'DEO Godown Approval Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Security Fee Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Licence Fee Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Payment Verification Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      },
      {
        text: 'Permit Date',
        fontSize: 10,
        alignment: 'center',
        fillColor: '#cccccc',
        bold: true
      }




      ]
    );
    // dynamic row push
    for (const key in this.bondapplicationtrackingdetailslist) {
      if (this.bondapplicationtrackingdetailslist.hasOwnProperty(key)) {
        const ipdayKey = this.bondapplicationtrackingdetailslist[key];
        const dateArray = new Array();
        const sNo = parseInt(key) + 1;
        // this.totalsno = sNo === this.serialnum -1? '': sNo + 1
        dateArray.push(sNo);
        dateArray.push(ipdayKey.applicationid);
        dateArray.push(ipdayKey.applicationname);
        dateArray.push(ipdayKey.firm);
        dateArray.push(ipdayKey.type);
        dateArray.push(ipdayKey.district);
        dateArray.push(ipdayKey.applicationdate);
        dateArray.push(ipdayKey.documentationupdatedate);
        dateArray.push(ipdayKey.digitalsigndate);
        dateArray.push(ipdayKey.processingpaymentdate);
        dateArray.push(ipdayKey.processingapprovaldate);
        dateArray.push(ipdayKey.godownupdationdate);
        dateArray.push(ipdayKey.deogodownapprovaldate);
        dateArray.push(ipdayKey.securityfeedate);
        dateArray.push(ipdayKey.licencefeedate);
        dateArray.push(ipdayKey.paymentverificationdate);
        dateArray.push(ipdayKey.permitdate);
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

            widths: ['auto', '6%', '6%', '6%', '5%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%'],
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
    console.log('data => ');
    console.log(dateData);
    this.utilsSer.createPDF( 'U.P. Bond Application Tracking Details', dateData );
    return true;
    // pdfMake.createPdf(dateData).download('U.P. Bond Application Tracking Details');
  }

  // xls Download
  generateXls() {
    /* table id is passed over here */
    const element = document.getElementById('excel_data');
    this.utilsSer.createXLSX( 'U.P. Bond Application Tracking Details Report.xlsx', element );
    // const ws: XLSXWorksheet = XLSXUtils.table_to_sheet(element);
    // /* generate workbook and add the worksheet */
    // const wb: XLSXWorkBook = XLSXUtils.book_new();
    // XLSXUtils.book_append_sheet(wb, ws, 'Sheet1');
    // /* save to file */
    // XLSXWriteFile(wb, 'U.P. Bond Application Tracking Details Report.xlsx');
  }
  // generateXls() {
  //   /* table id is passed over here */
  //   const element = document.getElementById('excel_data');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   /* save to file */
  //   XLSX.writeFile(wb, 'U.P. Bond Application Tracking Details Report.xlsx');
  // }


}
