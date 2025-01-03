import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WholeSaleIndentService } from '@app/services/retails/wholesaleIndent.service';
@Component({
  selector: 'app-indentrequestwholesale',
  templateUrl: './indentrequestwholesale.component.html',
  styleUrls: ['./indentrequestwholesale.component.scss']
})
export class IndentrequestwholesaleComponent implements OnInit {
  wholesaleData: any;

  constructor(private service: WholeSaleIndentService,
              private router: Router) { }

  ngOnInit() {
    this.indentWholesale();
  }
 
  indentWholesale() {
    this.service.get().subscribe((responceData: any) => {
      this.wholesaleData = responceData;
    });
  }
}
