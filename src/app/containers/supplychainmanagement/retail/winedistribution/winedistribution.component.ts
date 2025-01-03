import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WineDistributionConfig } from '@app/config/retail/winedistribution-config';
import { WineDistribution } from '@app/models/retails';
import { Router } from '@angular/router';
import { WineDistruibutionService } from '@app/services/retails/wineDistribution.service';

@Component({
  selector: 'app-winedistribution',
  templateUrl: './winedistribution.component.html',
  styleUrls: ['./winedistribution.component.css']
})
export class WinedistributionComponent implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = WineDistributionConfig.titleSection.list;
  public breadcrumbs = WineDistributionConfig.breadcrumbs;
  public columns = WineDistributionConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<WineDistribution>();

  constructor(private service: WineDistruibutionService, private router: Router) { }

  ngOnInit() {
    this.getWineDistribution();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/winedistribution/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/winedistribution/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getWineDistribution();
  }

  getWineDistribution() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as WineDistribution[];
    });
  }

}
