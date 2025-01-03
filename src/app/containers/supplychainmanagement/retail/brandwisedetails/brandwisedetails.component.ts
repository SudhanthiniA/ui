import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountPurchaserConfig } from '@app/config/retail/accountpurchaser-config';
import { AccountPurchaser } from '@app/models/retails';
import { Router } from '@angular/router';
import { AccountPurchaserService } from '@app/services/retails/accountPurchaser.service';

@Component({
  selector: 'app-brandwisedetails',
  templateUrl: './brandwisedetails.component.html',
  styleUrls: ['./brandwisedetails.component.css']
})
export class BrandwisedetailsComponent implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = AccountPurchaserConfig.titleSection.list;
  public breadcrumbs = AccountPurchaserConfig.breadcrumbs;
  public columns = AccountPurchaserConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<AccountPurchaser>();

  constructor(private service: AccountPurchaserService, private router: Router) { }

  ngOnInit() {
    this.getAllAccountPurchaser();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/accountpurchaser/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/accountpurchaser/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getAllAccountPurchaser();
  }

  getAllAccountPurchaser() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as AccountPurchaser[];
    });
  }

}
