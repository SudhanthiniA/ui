import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25APart2Service } from '@app/services/retails/formfl25Apart2.service';

@Component({
  selector: 'app-viewpart2',
  templateUrl: './viewpart2.component.html',
  styleUrls: ['./viewpart2.component.scss']
})
export class Viewpart2Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25APart2Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL25aPart2(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
}
