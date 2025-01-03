import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateUploadService } from '@app/services';
import { FileUploadMasterConfig } from '@app/config/table-config/fileuploadmaster-config';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-licensetemplateupload',
  templateUrl: './licensetemplateupload.component.html',
  styleUrls: ['./licensetemplateupload.component.scss'],
})
export class LicensetemplateuploadComponent implements OnInit {
  downloadName: any;
  private _files: any;
  model: any = {
    type: '',
    code: '',
    status: true,
  };
  templateObj: any = {
    name: '',
    code: '',
    status: '',
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view', 'download'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FileUploadMasterConfig.titleSection.list;
  public breadcrumbs = FileUploadMasterConfig.breadcrumbs;
  public columns = FileUploadMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  uploadlists: any;

  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  templates: any;
  constructor(
    private templateService: TemplateUploadService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.getAlltemplates();
    this.getBrandMaster();
  }

  getFile(files) {
    this._files = files.item(0);
    console.log(this._files);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getBrandMaster(pageNo, pageSize);
  }

  getBrandMaster(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.templateObj.code ? this.templateObj.code : null,
        name: this.templateObj.name ? this.templateObj.name : null,
        status: this.model.status ? this.model.status : false,
      },
      pageNo,
      paginationSize,
    };
    this.templateService
      .getAllTemplates(searchobj)
      .subscribe((responceData: any) => {
        // this.uploadlists = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as Location[];
          console.log(this.dataSource.data);
        }
        // else if ( responceData.errorCode === 0 ) {
        //   console.log(responceData)
        //   this.totalCount = 0;
        //   this.dataSource = responceData.userDisplayMesg;
        //   console.log(this.dataSource.data)
        // }
      });
  }

  searchBrandMaster() {
    this.getBrandMaster();
  }

  getPrint() {
    this.templateService.getPrintData().subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], {
        type: 'application/vnd.ms-excel',
      });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'data';
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
      return true;
    });
  }

  onDownload(value) {
    console.log(value);
    this.downloadName = 'District Wholesale Registration.xlsx';
    const blobOpt = {
      type: "application/vnd.ms-excel",
    };
    const id = value.id;
    this.templateService.getPrintData1(id).subscribe((responceData: any) => {
      // console.log(responceData.headers.get("Content-Disposition"));
      // const keys = responceData.headers.get("content-disposition");
      // console.log('keys', keys);
      // const headers = keys.map(
      //   (key) => `${key}: ${responceData.headers.get(key)}`
      // );
      // console.log('headers', responceData.headers);
      // responceData.headers
      //   .keys()
      //   .map((key) => console.log(`${key}: ${responceData.headers.get(key)}`));

      // const headers = responceData.headers;
      // console.log(headers); //<--- Check log for content disposition
      // const contentDisposition = headers.get("content-disposition");

      const newBlob = new Blob([responceData], blobOpt);
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement("a");
      link.href = data;
      link.download = this.downloadName;
      link.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
      return true;
    });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/licensetemplateupload/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/licensetemplateupload/view/' + event.id]);
  }
}
