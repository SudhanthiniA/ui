import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownConfigService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DropdownConfig } from '@app/config/table-config/dropdown-config';
import { Dropdown } from '@app/models/master';
@Component({
  selector: 'app-masterdropdownconfiguration',
  templateUrl: './masterdropdownconfiguration.component.html',
  styleUrls: ['./masterdropdownconfiguration.component.scss']
})
export class MasterdropdownconfigurationComponent implements OnInit {

  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];
  public totalCount: number;
  public isSearchRes = false;

  public columns = DropdownConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Dropdown>();

  constructor(
    private service: DropdownConfigService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    console.log(event);
    const code = this.dataSource.data.find(item => item.id === event.id).paramKey;
    this.router.navigate(['/master/dropdownconfiguration/edit/' + event.id + '/' + code]);
  }

  onView(event) {
    const code = this.dataSource.data.find(item => item.id === event.id).paramKey;
    this.router.navigate(['/master/dropdownconfiguration/view/' + event.id + '/' + code]);
  }

  handlePagination(event) {
    console.log(event);
    this.getData(null, event.currentPage, event.pageSize);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const requestParam = {
      searchInput: key,
      page: pageNo,
      pageSize
    };
    this.service.findDropdownList(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.totalCount = resp.data.totalElements;
          this.dataSource.data = resp.data.content as Dropdown[];
        }
      });
  }

  search(key) {
    this.getData(key);
  }

}
