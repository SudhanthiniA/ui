import { Component, OnInit } from '@angular/core';
import { DocumentTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentTypeConfig } from '@app/config/table-config/documentType-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documentlist: any;
  docTypeObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DocumentTypeConfig.titleSection.list;
  public breadcrumbs = DocumentTypeConfig.breadcrumbs;
  public columns = DocumentTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource();
  constructor(
    private docTypeService: DocumentTypeService,
    private router: Router) { }

  ngOnInit() {
    this.getdocumentlist();
  }
  onEdit(event) {
    this.router.navigate(['/master/document/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/document/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getdocumentlist(pageNo, pageSize);
  }
  getdocumentlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.docTypeObj.code ? this.docTypeObj.code : null,
        name: this.docTypeObj.code ? this.docTypeObj.name : null,
        isActive: this.docTypeObj.isActive ? JSON.parse(this.docTypeObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.docTypeService.searchDocumentType( objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
    });
  }
  searchDocumentType() {
   this.getdocumentlist();
  }
  resetKey() {
    this.docTypeObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getdocumentlist();
  }
}
