import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesLedgerService } from '@app/services/retails/salesLedger.service';

@Component({
  selector: 'app-viewsalesledger',
  templateUrl: './viewsalesledger.component.html',
  styleUrls: ['./viewsalesledger.component.scss']
})
export class ViewsalesledgerComponent implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SalesLedgerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getSalesLedgerId(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
