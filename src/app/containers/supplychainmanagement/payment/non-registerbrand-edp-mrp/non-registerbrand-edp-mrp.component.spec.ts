import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRegisterbrandEDPMRPComponent } from './non-registerbrand-edp-mrp.component';

describe('NonRegisterbrandEDPMRPComponent', () => {
  let component: NonRegisterbrandEDPMRPComponent;
  let fixture: ComponentFixture<NonRegisterbrandEDPMRPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRegisterbrandEDPMRPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRegisterbrandEDPMRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
