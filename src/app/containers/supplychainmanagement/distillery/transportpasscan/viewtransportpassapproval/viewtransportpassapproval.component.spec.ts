import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportpassapprovalComponent } from './viewtransportpassapproval.component';

describe('ViewtransportpassapprovalComponent', () => {
  let component: ViewtransportpassapprovalComponent;
  let fixture: ComponentFixture<ViewtransportpassapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportpassapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportpassapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
