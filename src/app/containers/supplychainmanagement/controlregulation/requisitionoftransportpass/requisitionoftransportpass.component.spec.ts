import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionoftransportpassComponent } from './requisitionoftransportpass.component';

describe('RequisitionoftransportpassComponent', () => {
  let component: RequisitionoftransportpassComponent;
  let fixture: ComponentFixture<RequisitionoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
