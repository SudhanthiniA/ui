import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TankregestrationConfig } from '@app/config/table-config/tankregestration-config';
import { TankregistartionService,DistileryService} from '@app/services';
import { Router,ActivatedRoute } from '@angular/router';




import { Tankregelist } from "@app/models/distillery";


@Component({
  selector: 'app-tankoverviewlist',
  templateUrl: './tankoverviewlist.component.html',
  styleUrls: ['./tankoverviewlist.component.scss']
})
export class TankoverviewlistComponent implements OnInit {

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

  listtype:any;

  public dataSource = new MatTableDataSource();
  // public columns = TankregestrationConfig.columns;

  public columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "tankName",
      displayName: "Tank Name",
      type: "string",
    },
    {
      name: "tankUsageGroupId",
      displayName: "Tank Usage",
      type: "string",
    },
    {
      name: "tankRawMaterialId",
      displayName: "Used For(Raw material)",
      type: "string",
    },
    {
      name: "capacity",
      displayName: "Total Capacity",
      type: "string",
    },
    {
      name: "innerDteiameter",
      displayName: "Available Capacity",
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
    private route: ActivatedRoute,
    private TankRegistrationService: TankregistartionService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params of listtype==>>',params);   
      if (params.listtype) {
        this.listtype = params.listtype;
        this.getalltanks();

      }else{
        this.getalltanks();
      }
    });
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getalltanks(pageNo, pageSize);
  }

  getalltanks(page = 0, pageSize = 5) {
    const postData={
            // orderBy: "asc",
            page,
            pageSize,
            // searchInput:this.tankreqObj.registration_id,
            // sortBy: "createdDate"
    }
    const listtype= this.listtype;
    this.TankRegistrationService.gettankviewlist(postData,listtype).subscribe((resp: any) => {
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


  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/edit', event.id]);
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankoverview/view', event.id]);
  } 

  onClk(type){
    console.log('tanktype-->>',type);
    this.router.navigate(['/supplychainmanagement/distillery/tankoverview/list']);
  }
}
