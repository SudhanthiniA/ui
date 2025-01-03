import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StrengthService } from '@app/services';

@Component({
  selector: 'app-viewstrength',
  templateUrl: './viewstrength.component.html',
  styleUrls: ['./viewstrength.component.scss']
})
export class ViewstrengthComponent implements OnInit {


  strengthObj: any = {
    code: '',
    strength: '',
    category: '',
    isActive: true
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: StrengthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStrengthById(params.id);
      }
    });
  }
  getStrengthById(id) {
    this.service.getStrengthById(id).subscribe((responceData: any) => {
      this.strengthObj = responceData.data;
    });
  }
}
