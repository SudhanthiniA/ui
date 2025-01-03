import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportticketsummaryComponent } from './reportticketsummary.component';

describe('ReportticketsummaryComponent', () => {
  let component: ReportticketsummaryComponent;
  let fixture: ComponentFixture<ReportticketsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportticketsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportticketsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
