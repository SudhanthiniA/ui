import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequisitionoftransportpassComponent } from './viewrequisitionoftransportpass.component';

describe('ViewrequisitionoftransportpassComponent', () => {
  let component: ViewrequisitionoftransportpassComponent;
  let fixture: ComponentFixture<ViewrequisitionoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequisitionoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequisitionoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
