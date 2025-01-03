import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportentitywiseComponent } from './reportentitywise.component';

describe('ReportentitywiseComponent', () => {
  let component: ReportentitywiseComponent;
  let fixture: ComponentFixture<ReportentitywiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportentitywiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportentitywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
