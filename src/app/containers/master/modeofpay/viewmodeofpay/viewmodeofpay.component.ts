import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ModeOfPaymentService } from '@app/services';

@Component({
  selector: 'app-viewmodeofpay',
  templateUrl: './viewmodeofpay.component.html',
  styleUrls: ['./viewmodeofpay.component.scss']
})
export class ViewmodeofpayComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  paymentObj: any = {
    stages: '',
    code: '',
    isActive: true,
  };
  date: any;
  editId: any;

  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Paymentservice: ModeOfPaymentService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.paymentObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.Paymentservice.getPaymentById(id).subscribe((responceData: any) => {
      this.paymentObj = responceData.data;
      if (responceData.data.isActive) {
        this.paymentObj.isActive = 'Active';

      } else {
        this.paymentObj.isActive = 'InActive';

      }
    });
  }

}
