import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DropdownConfigService, AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { CommentData } from '@app/models/master';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  dropDownKey: string;
  filterSubCode: string;
  inDependMasterData: any;
  commentList: any;

  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = [];
  public totalCount: number;

  public dataSource = new MatTableDataSource<CommentData>();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'createdDate',
      displayName: 'master.dropdownmaster.independent.date',
      type: 'date',
      dateFormat: 'dd-MM-yyyy h:mm:a'
    },
    {
      name: 'userName',
      displayName: 'master.dropdownmaster.independent.username',
      type: 'string'
    },
    {
      name: 'comments',
      displayName: 'master.dropdownmaster.independent.comments',
      type: 'string'
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private dropDownService: DropdownConfigService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      // code,subCode
      if (params.id && params.key) {
        this.dropDownKey = params.key;
        this.findDropDownMasterOnMaster();
      }
    });
  }

  handlePagination(event) {
    console.log('handlePagination::',event);
    this.getData(event.currentPage, event.pageSize);
  }

  getData(pageNo = 0, pageSize = 5) {

    const data = [];
    const startIndx = pageNo > 0 ? pageNo * pageSize : 0;
    const endIndx = pageNo > 0 ? (pageNo * pageSize) + pageSize : pageSize;

    for (let index = startIndx; index < endIndx; index++) {
      const element = this.commentList[index];
      if (element) { data.push(element); }
    }

    this.totalCount = 6;
    this.dataSource.data = data as CommentData[];
  }

  findDropDownMasterOnMaster() {
    this.dropDownService.findDropDownMasterOnMaster(this.dropDownKey).subscribe((resp: any) => {
      console.log('resp.data::', resp.data);
      this.inDependMasterData = resp.data;
      this.commentList = resp.data.commentList;

      this.getData();

    });

  }

}
