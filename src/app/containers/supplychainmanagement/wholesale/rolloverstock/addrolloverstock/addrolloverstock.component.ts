import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService,RollOverStockService} from '@app/services';
@Component({
  selector: 'app-addrolloverstock',
  templateUrl: './addrolloverstock.component.html',
  styleUrls: ['./addrolloverstock.component.scss']
})
export class AddrolloverstockComponent implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
  RollOverStockObj:any={
    UploadAndScan:''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private RollOverStockService: RollOverStockService,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.RollOverStockObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getRollOverStockrequestById(params.id);
        this.RollOverStockObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getRollOverStockrequestById(id) {
    const url = 'RollOverStockList'+'/'+id
    this.RollOverStockService.get(url).then((responceData: any) => {
      this.RollOverStockObj = responceData;
      console.log(this.RollOverStockObj);
    })
  }
  addRollOverStockDetails(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
        
          Brand:this.RollOverStockObj.Brand,
          Size: this.RollOverStockObj.Size,
          AvailStockBox: this.RollOverStockObj.AvailStockBox,
          RollOverBox: this.RollOverStockObj.RollOverBox,
          UploadAndScan: this.RollOverStockObj.UploadAndScan,
          status
        };
        const url = 'RollOverStockList/'+this.editId
        paramdpd['id'] = this.editId;
        this.RollOverStockService.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/wholesale/rolloverstock/list']);
          
        })
      } else {
        const paramdpd = {
        
          Brand:this.RollOverStockObj.Brand,
          Size: this.RollOverStockObj.Size,
          AvailStockBox: this.RollOverStockObj.AvailStockBox,
          RollOverBox: this.RollOverStockObj.RollOverBox,
          UploadAndScan: this.RollOverStockObj.UploadAndScan,
          status
        };
        const url = 'RollOverStockList';

          this.RollOverStockService.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement/wholesale/rolloverstock/list']);
        })
      }
    }
  }
}
