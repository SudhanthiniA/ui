import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL21Service } from '@app/services/retails';

@Component({
  selector: 'app-viewfl21',
  templateUrl: './viewfl21.component.html',
  styleUrls: ['./viewfl21.component.scss']
})
export class Viewfl21Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL21Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL21(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
