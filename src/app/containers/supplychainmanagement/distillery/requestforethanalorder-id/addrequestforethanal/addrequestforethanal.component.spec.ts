import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestforethanalComponent } from './addrequestforethanal.component';

describe('AddrequestforethanalComponent', () => {
  let component: AddrequestforethanalComponent;
  let fixture: ComponentFixture<AddrequestforethanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestforethanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestforethanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
