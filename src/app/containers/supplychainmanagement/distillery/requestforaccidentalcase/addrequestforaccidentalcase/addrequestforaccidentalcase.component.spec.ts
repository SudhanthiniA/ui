import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestforaccidentalcaseComponent } from './addrequestforaccidentalcase.component';

describe('AddrequestforaccidentalcaseComponent', () => {
  let component: AddrequestforaccidentalcaseComponent;
  let fixture: ComponentFixture<AddrequestforaccidentalcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestforaccidentalcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestforaccidentalcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
