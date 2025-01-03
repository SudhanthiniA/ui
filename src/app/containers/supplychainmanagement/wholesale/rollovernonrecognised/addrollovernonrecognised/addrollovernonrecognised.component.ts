import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService,RollOverNonRecognisedService} from '@app/services';

@Component({
  selector: 'app-addrollovernonrecognised',
  templateUrl: './addrollovernonrecognised.component.html',
  styleUrls: ['./addrollovernonrecognised.component.scss']
})
export class AddrollovernonrecognisedComponent implements OnInit {
  RollOverNonRecogniseObj:any={}
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private RollOverNonRecognisedService: RollOverNonRecognisedService,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.RollOverNonRecogniseObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getrequestById(params.id);
        this.RollOverNonRecogniseObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getrequestById(id) {
    const url = 'WholesaleRolloverList'+'/'+id
    this.RollOverNonRecognisedService.get(url).then((responceData: any) => {
      this.RollOverNonRecogniseObj = responceData;
      console.log(this.RollOverNonRecogniseObj);
    })
  }
  addDetails(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
        
          Brand:this.RollOverNonRecogniseObj.Brand,
          Size: this.RollOverNonRecogniseObj.Size,
          StockBox: this.RollOverNonRecogniseObj.StockBox,
          RollOverBox: this.RollOverNonRecogniseObj.RollOverBox,
          ETIN: this.RollOverNonRecogniseObj.ETIN,
          status
        };
        const url = 'WholesaleRolloverList/'+this.editId
        paramdpd['id'] = this.editId;
        this.RollOverNonRecognisedService.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/wholesale/rollovernonrecognised/list']);
          
        })
      } else {
        const paramdpd = {
        
          Brand:this.RollOverNonRecogniseObj.Brand,
          Size: this.RollOverNonRecogniseObj.Size,
          StockBox: this.RollOverNonRecogniseObj.StockBox,
          RollOverBox: this.RollOverNonRecogniseObj.RollOverBox,
          ETIN: this.RollOverNonRecogniseObj.ETIN,
          status
        };
        const url = 'WholesaleRolloverList';

          this.RollOverNonRecognisedService.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement/wholesale/rollovernonrecognised/list']);
        })
      }
    }
  }
}

