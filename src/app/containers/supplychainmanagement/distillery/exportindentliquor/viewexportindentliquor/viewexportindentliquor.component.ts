import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewexportindentliquor',
  templateUrl: './viewexportindentliquor.component.html',
  styleUrls: ['./viewexportindentliquor.component.scss']
})
export class ViewexportindentliquorComponent implements OnInit {
  exportObj: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }

  setData(id) {
  }
  
  navigateList() {
    this.router.navigate(['supplychainmanagement/distillery/exportindentliquor/list']);
  }
}
