import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewblendingproductionplan',
  templateUrl: './viewblendingproductionplan.component.html',
  styleUrls: ['./viewblendingproductionplan.component.scss']
})
export class ViewblendingproductionplanComponent implements OnInit {

  Obj: any;
  viewid: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.Id) {
        this.viewid = param.Id;
        this.setData(this.viewid);
      }
    });
  }

  setData(id) {
  }
  
  navigateList() {
    this.router.navigate(['supplychainmanagement/distillery/exportindentliquor/list']);
  }
}
