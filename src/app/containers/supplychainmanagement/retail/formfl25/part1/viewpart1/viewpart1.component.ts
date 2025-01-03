import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25Part1Service } from '@app/services/retails/formfl25part1.service';

@Component({
  selector: 'app-viewpart1',
  templateUrl: './viewpart1.component.html',
  styleUrls: ['./viewpart1.component.scss']
})
export class Viewpart1Component implements OnInit {
  formFl25Part1Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25Part1Service
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
      this.formFl25Part1Data = resp;
    });
  }

}
