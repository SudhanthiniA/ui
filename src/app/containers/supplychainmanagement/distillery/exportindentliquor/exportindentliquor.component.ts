import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExportIndentLiquorConfig } from '@app/config/industrial-distillery/exportindentliquor-config';
import { ExportIndentLiquor } from '@app/models/industial-distillery';
import { Router } from '@angular/router';
import { ExportIndentLiquorService } from '@app/services/distillery/exportindentliquor.service';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';

@Component({
  selector: 'app-exportindentliquor',
  templateUrl: './exportindentliquor.component.html',
  styleUrls: ['./exportindentliquor.component.scss']
})
export class ExportindentliquorComponent implements OnInit {
  exportData: any;
  exportObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = ExportIndentLiquorConfig.titleSection.list;
  public breadcrumbs = ExportIndentLiquorConfig.breadcrumbs;
  public columns = ExportIndentLiquorConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ExportIndentLiquor>();

  constructor(private service: ExportIndentLiquorService,
    private router: Router) { }

  ngOnInit() {
    this.getExportIndent();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/view/']);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/add/']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getExportIndent(pageNo, pageSize);
  }

  getExportIndent(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      pageNo,
      paginationSize
    };
    
  }

  searchExportIndent() {
    this.getExportIndent();
  }
}
