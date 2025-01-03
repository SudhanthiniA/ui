import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownConfigService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { MappingDropdownConfig } from '@app/config/table-config/mapping-dropdown-config';
import { MappingData } from '@app/models/master';

@Component({
  selector: 'app-relation-configuration',
  templateUrl: './relation-configuration.component.html',
  styleUrls: ['./relation-configuration.component.scss']
})
export class RelationConfigurationComponent implements OnInit {

  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];
  public totalCount: number;
  public isSearchRes = false;

  public columns = MappingDropdownConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<MappingData>();

  constructor(
    private dropDownService: DropdownConfigService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    // here no id property in data so the mat table return index of the data,so we are handling the data using index
    console.log(event);
    const editData: any = this.dataSource.data[event.id];
    console.log('editData::', editData);
    this.router.navigate(['/master/mappingconfiguration/edit/' + editData.filterCode + '/' + editData.subFilterCode]);
  }

  onView(event) {
    // here no id property in data so the mat table return index of the data,so we are handling the data using index
    console.log(event);
    const viewData: any = this.dataSource.data[event.id];
    console.log('viewData::', viewData);
    this.router.navigate(['/master/mappingconfiguration/view/' + viewData.filterCode + '/' + viewData.subFilterCode]);
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
    this.dropDownService.findDependentMasterList(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.totalCount = resp.data.totalElements;
          this.dataSource.data = resp.data.content as MappingData[];
        }
      });
  }

  search(key) {
    this.getData(key);
  }
}
