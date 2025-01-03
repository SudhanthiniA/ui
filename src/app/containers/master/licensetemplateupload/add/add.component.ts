import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthService, TemplateUploadService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  model: any = {
    name: '',
    code: '',
    status: true
  }
  private _files: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  templates: any;
  addedit: string;
  editId: any;
  createddate: any;
  createdby: any;
  constructor(
    private router: ActivatedRoute,
    private templateService: TemplateUploadService,
    private http: HttpClient,
    private authService: AuthService,
    private alert: AlertService,
    private router1: Router
  ) { }
  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router1.url.includes('add') == true ? 'Add' : 'Edit';
  }
  fileUpload() {
    this.exampleModalCenter.hide();

    if (!this.editId) {
      let postData = {
        name: this.model.name,
        code: this.model.code,
        status: this.model.status
      }
      const formData = new FormData();
      console.log(this._files);
      formData.append('file', this._files, this._files.name);
      console.log(formData);
      this.authService.fileUploadFlag = true;
      this.templateService.createTemplate(postData, formData).subscribe((responceData) => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'success');
          // this.router.navigate(['/master/licensee/list']);
          this.authService.fileUploadFlag = false;
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
          this.authService.fileUploadFlag = false;
        }
        this.authService.fileUploadFlag = false;
      })
    }
    else if (this.editId) {
      console.log(this.editId)
      const formData = new FormData();
      console.log(this._files);
      formData.append('file', this._files, this._files.name);
      console.log(formData);
      let postData = {
        "name": this.model.name,
        "code": this.model.code,
        "status": this.model.status,
        // "content": {
        //   "binaryStream": formData.append('file', this._files, this._files.name),

        // }
      }
      if (this.editId) {
        postData[`createdBy`] = parseInt(sessionStorage.getItem('createdby'));
        postData[`createdDate`] = sessionStorage.getItem('createddate');;
        postData['modifiedBy'] = parseInt(localStorage.getItem('USER_ID'));
        postData['modifiedDate'] = new Date();
        postData['id'] = parseInt(this.editId);
      }
      // else {
      //   postData['createdBy'] = sessionStorage.getItem('loggeduser');
      // }
      console.log(postData);
      this.authService.fileUploadFlag = true;
      this.templateService.updatetemplate(formData, postData).subscribe((responceData) => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'success');
          // this.router.navigate(['/master/licensee/list']);
          this.authService.fileUploadFlag = false;
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
          this.authService.fileUploadFlag = false;
        }
        this.authService.fileUploadFlag = false;
      })
    }
  }

  getFile(files) {
    this._files = files.item(0);
    console.log(this._files);
  }
  setData(id) {
    this.templateService.viewtempalte(id)
      .subscribe((resp: any) => {
        this.model = resp.data;
        sessionStorage.setItem('createddate', resp.data.createdDate);
        sessionStorage.setItem('createdby', resp.data.createdBy);
      });
  }
}
