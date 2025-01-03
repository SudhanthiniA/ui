import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL30Service } from '@app/services/retails/formfl30.service';

@Component({
  selector: 'app-viewformfl30',
  templateUrl: './viewformfl30.component.html',
  styleUrls: ['./viewformfl30.component.scss']
})
export class Viewformfl30Component implements OnInit {
  fl30Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL30Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
      this.getfl30ById(param.id);
      }
    });
  }
  getfl30ById(id) {
    this.service.getFormFL30(id).subscribe((resp) => {
      this.fl30Data = resp;
    });
  }
}
