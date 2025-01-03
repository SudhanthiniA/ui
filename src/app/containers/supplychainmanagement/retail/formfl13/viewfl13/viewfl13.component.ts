import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL13Service } from '@app/services/retails/formfl13.service';

@Component({
  selector: 'app-viewfl13',
  templateUrl: './viewfl13.component.html',
  styleUrls: ['./viewfl13.component.scss']
})
export class Viewfl13Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL13Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL13(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
