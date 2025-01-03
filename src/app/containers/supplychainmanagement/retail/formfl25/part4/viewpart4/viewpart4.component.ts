import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25Part4Service } from '@app/services/retails/formfl25part4.service';

@Component({
  selector: 'app-viewpart4',
  templateUrl: './viewpart4.component.html',
  styleUrls: ['./viewpart4.component.scss']
})
export class Viewpart4Component implements OnInit {
  formFl25Part4Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25Part4Service
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
      this.formFl25Part4Data = resp;
    });
  }
}
