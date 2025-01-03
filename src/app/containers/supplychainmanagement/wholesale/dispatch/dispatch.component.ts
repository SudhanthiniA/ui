import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { DispatchConfig } from '@app/config/wholesale/dispatch-config'
import { Dispatch } from '@app/models/wholesale/wholesale-data';
import { WholesaleDispatchService, WholesaleIndentRequestService } from '@app/services';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

  dispatchObj: any = {
      issueDate: '',
      transportDate: '',
      transportPassNo:'',
      unitName:''
  };
  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];

  public totalCount: number;
  public isSearchRes = false;

  public columns = DispatchConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Dispatch>();

  constructor(
    private router: Router,
    private dispatchService: WholesaleDispatchService,

  ) { }

  ngOnInit() {
    this.getAllDispatch()
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    this.pageNo = event.currentPage;
    this.pageSize = event.pageSize;
    this.getAllDispatch();
  }
  searchDispatch() {
    this.getAllDispatch();
  }
  resetKey() {
    this.dispatchObj = {
      issueDate: '',
      transportDate: '',
      transportPassNo:'',
      unitName:''
    };
    this.getAllDispatch();
  }

  getAllDispatch() {
    const paginationSize = this.pageSize;
    const requestParam = {
      "filters": {
       // this.dispatchObj,
       "issueDate":this.dispatchObj.issueDate ? this.dispatchObj.issueDate:'',
       "transportDate":this.dispatchObj.transportDate ? this.dispatchObj.transportDate:'',
       "transportNo":this.dispatchObj.transportPassNo ? this.dispatchObj.transportPassNo:'',
       "unitName":this.dispatchObj.unitName ? this.dispatchObj.unitName:''
       },
      pageNo:this.pageNo,
      paginationSize:this.pageSize,
      transportPassStatus:'COMPLETED'
    };
    this.dispatchService.searchDisptch(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.dataSource.data = resp.data.contents as Dispatch[];;
          this.totalCount = resp.data.totalElements;
        }
      });
  }

  onEdit(event) {
    let id = event.id
    this.router.navigate(['/supplychainmanagement/wholesale/dispatch/edit/'+id]);
  }

  onView(event) {
    let id = event.id
    this.router.navigate(['/supplychainmanagement/wholesale/dispatch/view/'+id]);
  }

}
