import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclemakeComponent } from './vehiclemake.component';

describe('VehiclemakeComponent', () => {
  let component: VehiclemakeComponent;
  let fixture: ComponentFixture<VehiclemakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclemakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclemakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
