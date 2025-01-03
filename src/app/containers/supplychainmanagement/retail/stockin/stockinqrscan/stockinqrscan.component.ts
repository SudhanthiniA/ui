import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockinqrscan',
  templateUrl: './stockinqrscan.component.html',
  styleUrls: ['./stockinqrscan.component.scss']
})
export class StockinqrscanComponent implements OnInit {
  stockinQRObject: any = {};
  formSubmitted = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  scanQR(form) {
    this.formSubmitted = true;
    console.log(form.valid);
    if (form.valid) {
      this.router.navigate(['/supplychainmanagement/retail/stockin/add/' + this.stockinQRObject.code]);
    }
  }

}
