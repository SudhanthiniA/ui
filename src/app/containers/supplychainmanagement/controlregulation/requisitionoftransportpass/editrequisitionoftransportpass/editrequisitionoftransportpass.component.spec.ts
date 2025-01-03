import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrequisitionoftransportpassComponent } from './editrequisitionoftransportpass.component';

describe('EditrequisitionoftransportpassComponent', () => {
  let component: EditrequisitionoftransportpassComponent;
  let fixture: ComponentFixture<EditrequisitionoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrequisitionoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrequisitionoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
