import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelmodifyrequisitionoftransportpassComponent } from './cancelmodifyrequisitionoftransportpass.component';

describe('CancelmodifyrequisitionoftransportpassComponent', () => {
  let component: CancelmodifyrequisitionoftransportpassComponent;
  let fixture: ComponentFixture<CancelmodifyrequisitionoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelmodifyrequisitionoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelmodifyrequisitionoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
