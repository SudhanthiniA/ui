import { Component, OnInit } from '@angular/core';
import { DailyAbstractService } from '@app/services/retails/dailyAbstract.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewabstract',
  templateUrl: './viewabstract.component.html',
  styleUrls: ['./viewabstract.component.scss']
})
export class ViewabstractComponent implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DailyAbstractService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getDailyAbstractId(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
