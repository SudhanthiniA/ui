import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureplanestimationofbasewineapplicationComponent } from './manufactureplanestimationofbasewineapplication.component';

describe('ManufactureplanestimationofbasewineapplicationComponent', () => {
  let component: ManufactureplanestimationofbasewineapplicationComponent;
  let fixture: ComponentFixture<ManufactureplanestimationofbasewineapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureplanestimationofbasewineapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureplanestimationofbasewineapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
