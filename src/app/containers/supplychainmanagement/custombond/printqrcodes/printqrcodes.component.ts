import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DistileryService } from '@app/services';
import { Qrcode } from '@app/models/industial-distillery';
import { QrCodeConfig } from '@app/config/industrial-distillery/qrcode-config';


@Component({
  selector: 'app-printqrcodes',
  templateUrl: './printqrcodes.component.html',
  styleUrls: ['./printqrcodes.component.scss']
})
export class PrintqrcodesComponent implements OnInit {

  public columns = QrCodeConfig.columns;
  public actionKeys = ['edit', 'view'];
  public dataSource = new MatTableDataSource<Qrcode>();
  tankData: any;
  totalCount: any;
  Data: any;
  constructor(private distService: DistileryService, private router: Router) { }
  public pageSize = 0;
 
  Obj: any = {
    search:''
  };
  ngOnInit() {
    this.getlistdata();
   
  }
  
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlistdata(pageNo, pageSize);
  }

  getlistdata(pageNo = 0, paginationSize = 5) {
    const searchobj = {
       pageNo,
      paginationSize,
      searchInput: this.Obj.search
     
    };
    this.distService.searchQrCOde(searchobj).subscribe((resp: any) => {
      this.Data = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data =  resp.content.content as Qrcode[];
      }
    });
  }
 
  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/printqrcodes/view/'+ event.id]);
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/printqrcodes/edit/'+ event.id]);
  }
  searchTank() {
    this.getlistdata();
  }
  clearData() {
    
    this.Obj.search = '';
  
    this.getlistdata();
  }
}