import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadletteragainstspiritpurchaserequestComponent } from './uploadletteragainstspiritpurchaserequest.component';

describe('ForeclosureofenapurchaseorderComponent', () => {
  let component: UploadletteragainstspiritpurchaserequestComponent;
  let fixture: ComponentFixture<UploadletteragainstspiritpurchaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadletteragainstspiritpurchaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadletteragainstspiritpurchaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
