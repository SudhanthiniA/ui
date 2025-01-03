import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL42Service } from '@app/services/retails/formfl42.service';

@Component({
  selector: 'app-viewfl42',
  templateUrl: './viewfl42.component.html',
  styleUrls: ['./viewfl42.component.scss']
})
export class Viewfl42Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL42Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFl42(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}