import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25Part3Service } from '@app/services/retails/formfl25part3.service';

@Component({
  selector: 'app-viewpart3',
  templateUrl: './viewpart3.component.html',
  styleUrls: ['./viewpart3.component.scss']
})
export class Viewpart3Component implements OnInit {
  formFl25Part3Data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25Part3Service
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
      this.formFl25Part3Data = resp;
    });
  }
}
