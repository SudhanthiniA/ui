import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService, IndentscceptaceService } from '@app/services';

@Component({
  selector: 'app-viewindentacceptance',
  templateUrl: './viewindentacceptance.component.html',
  styleUrls: ['./viewindentacceptance.component.scss']
})
export class ViewindentacceptanceComponent implements OnInit {

  editId: any;
  indentacceptlist: any;
  status: any;

  constructor(private indentacceptance: IndentscceptaceService,
    private route: ActivatedRoute, private alert: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.id) {
        this.getById(params.id);
        this.editId = params.id;
      }
    });
  }

  getById(id) {
    this.indentacceptance.indentbyid(id)
    .subscribe((resp: any) => {
      if(resp.status == 's'){
        this.indentacceptlist = resp.data;
      }else if(resp.status == 'f'){
        this.alert.showError(resp.userDisplayMesg);
      }
    })
  }

}
