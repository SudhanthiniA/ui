import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequisitionoftransportpassComponent } from './addrequisitionoftransportpass.component';

describe('AddrequisitionoftransportpassComponent', () => {
  let component: AddrequisitionoftransportpassComponent;
  let fixture: ComponentFixture<AddrequisitionoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequisitionoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrequisitionoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
