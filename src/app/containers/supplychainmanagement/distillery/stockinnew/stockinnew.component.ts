import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreviewService, TankregistartionService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TankregestrationConfig } from '@app/config/table-config/tankregestration-config';
import { Tankregelist } from "@app/models/distillery";

@Component({
  selector: 'app-stockinnew',
  templateUrl: './stockinnew.component.html',
  styleUrls: ['./stockinnew.component.scss']
})
export class StockinnewComponent implements OnInit {

  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT'||'SENDBACK',
    },
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  page: number;
  limit: any;

  public columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    
    {
      name: 'requestDate',
      displayName: 'Date',
      displayFcn: (item: any) => item.requestDate.join('-'),
      type: 'date',
      dateFormat: "dd-MMM-yyyy",
  },
   
    {
      name: "applicationNumber",
      displayName: "Transport Pass No.",
      type: "string",
    },
    {
      name: "innerDiameter",
      displayName: "Total No. of Indent",
      type: "string",
    },
    {
      name: "capacity",
      displayName: "Total No of Cases Received",
      type: "string",
    },
    {
      name: "height",
      displayName: "Total No of Bottles Received",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        SUMITTED: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ];
  constructor(
    private router: Router,
    private preview: PreviewService,
    private TankRegistrationService: TankregistartionService
  ) { }

  ngOnInit() {
    this.getalltanks();
  }

  getalltanks(page = 0, pageSize = 5) {
 
    const postData={
            orderBy: "asc",
            page,
            pageSize,
            // searchInput:this.tankreqObj.registration_id,
            sortBy: "createdDate"
    }
    this.TankRegistrationService.searchTanReg(postData).subscribe((resp: any) => {
      if (resp.content) {
        console.log('responce data ==>>',resp.content.content);
        
        this.dataSource.data = resp.content.content as Tankregelist[];
        this.totalCount = resp.content.totalElements;
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getalltanks(pageNo, pageSize);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/stockinnew/edit', event.id]);
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/stockinnew/view', event.id]);
  }

}
