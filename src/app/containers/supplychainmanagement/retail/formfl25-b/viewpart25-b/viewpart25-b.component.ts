import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormFl25bService } from '@app/services/retails/formfl25b.service';

@Component({
  selector: 'app-viewpart25-b',
  templateUrl: './viewpart25-b.component.html',
  styleUrls: ['./viewpart25-b.component.scss']
})
export class Viewpart25BComponent implements OnInit {
  fl25bData: any;

  constructor(
    private fl25bService: FormFl25bService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.getFl25B(param.id);
      }
    });
  }
  getFl25B(id) {
    this.fl25bService.getFormFl25BId(id).subscribe((resp) => {
      this.fl25bData = resp;
    });
  }
}
