import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFL25APart3Service } from '@app/services/retails/formfl25Apart3.service';

@Component({
  selector: 'app-viewpart3',
  templateUrl: './viewpart3.component.html',
  styleUrls: ['./viewpart3.component.scss']
})
export class Viewpart3Component implements OnInit {
  formFlData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FormFL25APart3Service
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getFormFL25Apart3(id).subscribe((resp) => {
      this.formFlData = resp;
    });
  }
  
}
