import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL24Service } from '@app/services/retails/formfl24.service';

@Component({
  selector: 'app-viewfl24',
  templateUrl: './viewfl24.component.html',
  styleUrls: ['./viewfl24.component.scss']
})
export class Viewfl24Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL24Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getForm24(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
