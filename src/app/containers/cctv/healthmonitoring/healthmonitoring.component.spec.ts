import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmonitoringComponent } from './healthmonitoring.component';

describe('HealthmonitoringComponent', () => {
  let component: HealthmonitoringComponent;
  let fixture: ComponentFixture<HealthmonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthmonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthmonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
