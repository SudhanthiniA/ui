import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestforextensionpermitvalidityComponent } from './addrequestforextensionpermitvalidity.component';

describe('AddrequestforextensionpermitvalidityComponent', () => {
  let component: AddrequestforextensionpermitvalidityComponent;
  let fixture: ComponentFixture<AddrequestforextensionpermitvalidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestforextensionpermitvalidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestforextensionpermitvalidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
