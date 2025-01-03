import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25Part2Service } from '@app/services/retails/formfl25part2.service';
@Component({
  selector: 'app-viewpart2',
  templateUrl: './viewpart2.component.html',
  styleUrls: ['./viewpart2.component.scss']
})
export class Viewpart2Component implements OnInit {
  formFl25Part2Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25Part2Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getById(id).subscribe((resp) => {
      this.formFl25Part2Data = resp;
    });
  }
}
