import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopvehiclealertComponent } from './stopvehiclealert.component';

describe('StopvehiclealertComponent', () => {
  let component: StopvehiclealertComponent;
  let fixture: ComponentFixture<StopvehiclealertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopvehiclealertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopvehiclealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
