import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescriptionService } from '@app/services/masters/description.service';
import { HeadcodeService, FeetypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DescriptionConfig } from '@app/config/table-config/description-config';
import { Description } from '@app/models/master';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
  })
  export class DescriptionComponent implements OnInit {
    pageNo = 0;
    public actionKeys = ['edit', 'view'];
    public pageSize = 5;
    public totalCount: number;
    public isSearchRes = false;
    public titleSection = DescriptionConfig.titleSection.list;
    public breadcrumbs = DescriptionConfig.breadcrumbs;
    public columns = DescriptionConfig.columns;
    public lastText = 'master.common.list';
    public dataSource = new MatTableDataSource<Description>();
    
    feetypeData: any;
    headCodeData: any;
    descriptionData: any;
    descriptionObj: any = {
        code: '',
        name: '',
        isActive: true
    };
    constructor(private router: Router,
      private service: DescriptionService,
      private feeType: FeetypeService,
      private headCode: HeadcodeService) {}

    ngOnInit() {
      this.getDescription();
      this.getFeetype();
      this.getHeadCode();
    }

    getFeetype() {
      this.feeType.getAllFeetype().subscribe((resp: any) => {
        this.feetypeData = resp.data;
      });
    }

    getHeadCode() {
      this.headCode.getAllHeadcode().subscribe((resp: any) => {
        this.headCodeData = resp.data;
      });
    }

    onEdit(event) {
      this.router.navigate(['/master/description/edit/' + event.id]);
    }
  
    onView(event) {
      this.router.navigate(['/master/description/view/' + event.id]);
    }
  
    handlePagination(event) {
      console.log('Parent-handlePagination', event);
      const pageNo = event.currentPage;
      const pageSize = event.pageSize;
      this.getDescription(pageNo, pageSize);
    }

    getDescription(pageNo = 0, paginationSize = 5) {
      const searchobj = {
        filters: {
          code: this.descriptionObj.code ? this.descriptionObj.code : null,
          name: this.descriptionObj.code ? this.descriptionObj.code : null,
          isActive: this.descriptionObj.isActive ? this.descriptionObj.isActive : null,
        },
        pageNo,
        paginationSize
      };
      this.service.searchDescription(searchobj).subscribe((responceData: any) => {
        this.descriptionData = responceData.data.contents;
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as Description[];
        }
      });
    }

    searchDescription() {
      this.getDescription();
    }
  
    resetKey() {
      this.descriptionObj = {
        code: '',
        name: '',
        isActive: true,
      };
      this.getDescription();
    }
  }
  