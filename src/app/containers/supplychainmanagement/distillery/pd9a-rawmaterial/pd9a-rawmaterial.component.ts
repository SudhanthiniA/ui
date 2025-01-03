import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DistilleryapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Pd9arawmetirialService } from '@app/services'
import { MatTableDataSource } from '@angular/material/table';
import { Pd9a } from "@app/models/industial-distillery";

@Component({
  selector: 'app-pd9a-rawmaterial',
  templateUrl: './pd9a-rawmaterial.component.html',
  styleUrls: ['./pd9a-rawmaterial.component.css']
})
export class Pd9aRawmaterialComponent implements OnInit, OnDestroy {
  pd9aObj:any = {
    date: '',
    batchno: '',
    alcoholqty:''
  };
  pd9aRawmaterialList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public actionKeys=['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Pd9a>();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'date',
      displayName: 'From Date and Time',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'toDate',
      displayName: 'To Date and Time',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'quantityOfMolassesBaseUsed',
      displayName: 'Molasses used in Qtls',
      type: 'string'
    },
    {
      name: 'finalGravity',
      displayName: 'Final Gravity of Fermented Wash',
      type: 'string'
    },
    {
      name: 'strength',
      displayName: 'Strength % V/V',
      type: 'string',
    },
    {
      name: 'passedDate',
      displayName: 'Date of Passed',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'qtlsMolasses',
      displayName: 'Al/Qtls Molasses',
      type: 'string',
    }
 
  ];
  constructor(private distilleryapiService: DistilleryapiService,private pd9arawmiterila:Pd9arawmetirialService,private router: Router,) { }

  ngOnInit() {
    this.getpd9aRawmaterial();

  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/view/' + event.id]);
  }
  getpd9aRawmaterial(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let data = {
      filters: {
        date: this.pd9aObj.date ? this.pd9aObj.date : null,
        batchno: this.pd9aObj.batchno ? this.pd9aObj.batchno : null,
        alcoholqty: this.pd9aObj.alcoholqty ? this.pd9aObj.alcoholqty : null,
      },
      pageNo,
      paginationSize

    }
    this.pd9arawmiterila.getpd9aalldata(data).subscribe(responceData => {
      console.log(responceData);
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
    });
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getpd9aRawmaterial(pageNo, pageSize);
  }
  searchapi() {
    const objtest = {
      filters: {
        fromDate: this.pd9aObj.fromDate ? this.pd9aObj.fromDate : null,
        toDate: this.pd9aObj.toDate ? this.pd9aObj.toDate : null,
       
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.pd9arawmiterila.searchpd9A(objtest).subscribe((responceData: any) => {
      this.pd9aRawmaterialList = responceData.data.contents;
      // if (this.dtElement.dtInstance) {
      //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //     dtInstance.destroy();
      //     this.dtTrigger.next();
      //   });
      // } else {
      //   this.dtTrigger.next();
      // }
    });
  }
  resetKey() {
    this.pd9aObj = {
      fromDate: '',
      toDate: '',
    };
    this.getpd9aRawmaterial();
  }
  getPdfData1(type: any) {
    let url, downloadType,title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'TankRegistration'}`;
      downloadType = 'application/pdf';
      title= 'TankRegistration.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TankRegistration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title= 'TankRegistration.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TankRegistration'}`;
      downloadType = 'application/csv';
      title= 'TankRegistration.csv'
    }
    this.exportFile(url, postData, downloadType,title);
    return true
  }
  exportFile(url, postData, downloadType,title) {
    this.distilleryapiService.postDownload(url, postData).then((responceData: any) => {
      const newBlob = new Blob([responceData], { type: downloadType });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = title
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
      
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
