import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25APart4Service } from '@app/services/retails/formfl25Apart4.service';

@Component({
  selector: 'app-viewpart4',
  templateUrl: './viewpart4.component.html',
  styleUrls: ['./viewpart4.component.scss']
})
export class Viewpart4Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25APart4Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL25Apart4(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}