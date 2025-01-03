import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFl35Service } from '@app/services/retails';

@Component({
  selector: 'app-viewfl35',
  templateUrl: './viewfl35.component.html',
  styleUrls: ['./viewfl35.component.scss']
})
export class Viewfl35Component implements OnInit {
  editId: any;
  fl35Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFl35Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.editId = param.id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.service.getFormFl35Id(id).subscribe((resp) => {
      this.fl35Data = resp;
    });
  }
}
