import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledetailvtsComponent } from './vehicledetailvts.component';

describe('VehicledetailvtsComponent', () => {
  let component: VehicledetailvtsComponent;
  let fixture: ComponentFixture<VehicledetailvtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicledetailvtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicledetailvtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
