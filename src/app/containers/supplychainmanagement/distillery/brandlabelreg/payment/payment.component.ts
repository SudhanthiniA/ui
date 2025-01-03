import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, BrandlabelregService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  id: any;
  reqObj: any;
  applicationNo: any;
  unitName: string;
  unitAddress: string;
  brandFees: string;
  labelFees: string;
  totalFees: number;
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private brandlabelregService: BrandlabelregService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.id = param.id;
      }
    });
    this.getData(this.id)
  }
  getData(id) {
    this.brandlabelregService.getById(id).subscribe((responceData: any) => {
      this.data = responceData.data;

    });
    this.applicationNo = sessionStorage.getItem('applicationNo');
    this.unitName = sessionStorage.getItem('unitName');
    this.unitAddress= sessionStorage.getItem('unitAddress');
    this.brandFees= sessionStorage.getItem('brandFees');
    this.labelFees = sessionStorage.getItem('labelFees');
    this.totalFees = parseInt(this.brandFees) + parseInt(this.labelFees);
  }
  procedToPayment() {
    let Id = this.id
    this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/acknowledgement/',Id]);
  }
}
