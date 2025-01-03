import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { DocumentTypeService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditdocument',
  templateUrl: './addeditdocument.component.html',
  styleUrls: ['./addeditdocument.component.scss']
})
export class AddeditdocumentComponent implements OnInit {

  documentObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private docTypeService: DocumentTypeService,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.documentObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getdocumentById(params.id);
        this.documentObj.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  adddocumenttype(documenttypeForm) {
    this.formSubmitted = false;
    if (documenttypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.documentObj);
      const postParam = {
        code: this.documentObj.code,
        name: this.documentObj.name,
        active: this.documentObj.active
      };
      if (this.documentObj.id) {
        postParam['id'] = this.documentObj.id;
      }

      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
     if (respData) {
        ((this.documentObj.id) ? this.docTypeService.updateDocument(postParam) : this.docTypeService.addDocument(postParam))
        .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/document/list']);

          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      }
    }).catch(err => {
      console.log('\n err...', err);
    });
    }
  }

  getdocumentById(id) {
    this.docTypeService.getdocById(id).subscribe((responceData: any) => {
      this.documentObj = responceData.data;
    });
  }
}
