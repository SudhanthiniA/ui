import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25APart1Service } from '@app/services/retails/formfl25Apart1.service';

@Component({
  selector: 'app-viewpart1',
  templateUrl: './viewpart1.component.html',
  styleUrls: ['./viewpart1.component.scss']
})
export class Viewpart1Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25APart1Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL25Apart1(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}