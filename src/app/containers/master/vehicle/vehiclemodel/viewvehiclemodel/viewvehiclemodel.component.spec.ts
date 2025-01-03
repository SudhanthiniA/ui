import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvehiclemodelComponent } from './viewvehiclemodel.component';

describe('ViewvehiclemodelComponent', () => {
  let component: ViewvehiclemodelComponent;
  let fixture: ComponentFixture<ViewvehiclemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvehiclemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvehiclemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
