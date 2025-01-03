import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  MasterapiService,
  DistileryService,
  TransportGenService
} from '@app/services';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add-mf6-part2',
  templateUrl: './add-mf6-part2.component.html',
  styleUrls: ['./add-mf6-part2.component.scss']
})
export class AddMf6Part2Component implements OnInit {
  mf6part2obj: any = {
    sugarmill: '',
    grade: '',
    date: ''
  };
  popupFlag: boolean;
  gradelist: any[] = [];
  formSubmitted = false;
  sugarmillnamelist: any = []
  editId: any;
  mf6getMf6ParttwoById: any;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert: AlertService,
    private masterapiService: MasterapiService,
    private distileryService: DistileryService,
    private transportGenService: TransportGenService
  ) { }

  ngOnInit() {
    this.mf6part2obj.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMf6ParttwoById(params.id);
        // this.indentRequestObject.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.getgrade();
    this.sugarmillname();
  }

  getgrade() {
    this.masterapiService.get(apiUrls.getAllMolassesType).then((responceData: any) => {
      console.log(responceData);
      this.gradelist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  ShowPOpUp(addform, status) {
    this.formSubmitted = false;
    if (addform.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {
      console.log("test test")
      this.popupFlag = true;
      const el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }

  submitform(addform, status) {
    this.formSubmitted = false;
    if (addform.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {

        if (status === 1) {
          this.mf6part2obj[`status`] = true;
        } else {
          this.mf6part2obj[`status`] = false;
        }
        this.mf6part2obj['id'] = this.editId;
        this.distileryService.updateMf6parttwo(this.mf6part2obj).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            this.router.navigate(['/supplychainmanagement/distillery/mf6-part2/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        if (status === 2) {
          this.mf6part2obj[`status`] = false;
        } else {
          this.mf6part2obj[`status`] = true;
        }
        this.distileryService.addMf6parttwo(this.mf6part2obj).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            this.router.navigate(['/supplychainmanagement/distillery/mf6-part2/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }

  getMf6ParttwoById(id) {
    if (id) {
      this.distileryService.getMf6parttwoById(id).subscribe(responceData => {
        console.log(responceData);
        this.mf6part2obj = responceData['data'];
      });
    } else {
      // this.passbookObj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

  previewData(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part2/preview']);
  }

  sugarmillname() {
    this.transportGenService.getAllSugarMilllName().subscribe((responceData: any) => {
      this.sugarmillnamelist = responceData.data;
    });
  }
}
