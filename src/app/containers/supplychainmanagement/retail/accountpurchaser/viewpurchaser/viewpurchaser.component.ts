import { Component, OnInit } from '@angular/core';
import { AccountPurchaserService } from '@app/services/retails/accountPurchaser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewpurchaser',
  templateUrl: './viewpurchaser.component.html',
  styleUrls: ['./viewpurchaser.component.scss']
})
export class ViewpurchaserComponent implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountPurchaserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getAccountPurchaserId(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
