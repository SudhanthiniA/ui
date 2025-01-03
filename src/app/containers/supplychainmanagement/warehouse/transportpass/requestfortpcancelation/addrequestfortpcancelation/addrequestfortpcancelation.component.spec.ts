import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestfortpcancelationComponent } from './addrequestfortpcancelation.component';

describe('AddrequestfortpcancelationComponent', () => {
  let component: AddrequestfortpcancelationComponent;
  let fixture: ComponentFixture<AddrequestfortpcancelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestfortpcancelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequestfortpcancelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
