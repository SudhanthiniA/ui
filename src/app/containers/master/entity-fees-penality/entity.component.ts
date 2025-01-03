import { Component, OnInit } from '@angular/core';
import { EntityService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { EntityConfig } from '@app/config/table-config/entity-config';
import { Entity } from '@app/models/user-management';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = EntityConfig.titleSection.list;
  public breadcrumbs = EntityConfig.breadcrumbs;
  public columns = EntityConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Entity>();

  constructor(
    private entityService: EntityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    this.router.navigate(['/master/entity/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/entity/view/' + event.id]);
  }

  handlePagination(event) {
    this.getData(null, event.currentPage, event.pageSize);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const searchObj = {
      searchInput: key,
      page: pageNo,
      pageSize: pageSize
    };
    this.entityService.getAllEntityType(searchObj).subscribe((responceData: any) => {
      if (responceData.responseCode === 200) {
        this.totalCount = responceData.content.totalElements;
        this.dataSource.data = responceData.content.content as Entity[];
      }
    });
  }
  search(key) {
    this.getData(key);
  }
}
