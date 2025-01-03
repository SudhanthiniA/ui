import { Component, OnInit } from '@angular/core';
import { DistilleryapiService } from '@app/services';
import { TankRepairConfig } from '@app/config/industrial-distillery/tankrepair-config';
import { MatTableDataSource } from '@angular/material/table';
import { TankRepair } from '@app/models/industial-distillery';
import { TankReapirService } from '@app/services/distillery/tankrepair.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tankrepair',
  templateUrl: './tankrepair.component.html',
  styleUrls: ['./tankrepair.component.scss']
})
export class TankrepairComponent implements OnInit {


  public columns = TankRepairConfig.columns;
  public actionKeys = ['edit', 'view'];
  public dataSource = new MatTableDataSource<TankRepair>();
  tankData: any;
  constructor(private service:TankReapirService, private router: Router) { }
  public pageSize = 5;
  ngOnInit() {

  this.getTank();
  }
  
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTank(pageNo, pageSize);
  }

  getTank(pageNo = 0, pageSize = 5) {
    this.service.get().subscribe((resp: any) => {
      this.tankData = resp;
      console.log(this.tankData, '====sample====');
      this.dataSource.data = resp as TankRepair[];
    });
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankrepair/view/',event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankrepair/add/',event.id]);
  }
}
