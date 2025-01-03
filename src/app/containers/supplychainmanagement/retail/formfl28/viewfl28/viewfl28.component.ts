import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFl28Service } from '@app/services/retails';

@Component({
  selector: 'app-viewfl28',
  templateUrl: './viewfl28.component.html',
  styleUrls: ['./viewfl28.component.scss']
})
export class Viewfl28Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFl28Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFl28Id(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
