import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Mf5Part1Service,UtilsService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-viewmf5partone',
  templateUrl: './viewmf5partone.component.html',
  styleUrls: ['./viewmf5partone.component.scss']
})
export class Viewmf5partoneComponent implements OnInit {
  mffpartoneObj: any = {
    requestDate: '',
    openStockByAccount: '',
    totalDispatchOfMolasses: '',
    molassesRecivedOnNewsesson: '',
    dispatchMolassesOnDistellerys: '',
    dispatchMolassesOnOsShops: '',
    dispatchMolassesOnIndustrialUnits: '',
    tradeAfterRelease: '',
    quantityFree: '',
    quantityLevy: '',
    total: '',
    totalSugarQuantity: '',
    remarks: '',
    status: false,
    createdBy: 'Admin',
    updatedBy: 'Admin',
  };
  editId: any;
  addedit: any;
  constructor(private route: ActivatedRoute, private utilsSer: UtilsService,private Mf5Part1Service: Mf5Part1Service, private router: Router, private datepipe: DatePipe, private preview: PreviewService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  setData(id?) {
    if (id) {
      this.Mf5Part1Service.getMf5PartOneById(id).subscribe((responceData: any) => {
        this.mffpartoneObj = responceData.data;
      })
    } else {
      if (this.preview.setData) {
        this.mffpartoneObj = this.preview.setData;
      }
    }
  }
  getPrint() {
    this.Mf5Part1Service.getPrintData().subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MF5 Part1'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;

    })
  }
  generatePdf() {
    const body1 = [];
    body1.push([{}, {
      //image: this.global.upLogo,
      alignment: 'center',
      fit: [70, 70]
    },
    {
    }]);
    body1.push([{}, { text: 'Excise Department,Government for Utter Pradesh', fontSize: 18, alignment: 'center', uppercase: true, style: 'bold' }, {}]);
    body1.push([{}, { text: 'U.P. Bond Application Tracking Details', alignment: 'center' }, {}]);
    body1.push([{}, { text: '.', alignment: 'center', style: 'transparent' }, {}]);
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
    for (const key in this.mffpartoneObj) {
      if (this.mffpartoneObj.hasOwnProperty(key)) {
        const ipdayKey = this.mffpartoneObj[key];
        const dateArray = new Array();
        const sNo = parseInt(key) + 1;
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
      content: [
        {
          table:
          {
            widths: ['15%', '70%', '15%'],
            headerRows: 1,
            body: body1,
          },
          layout: 'noBorders'
        },
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
        }
      ],
      styles: {
        transparent: {
          color: 'white'
        },
        table: {
          background: 'yellow',
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
    this.utilsSer.createPDF('U.P. Bond Application Tracking Details', dateData);
  }
}
