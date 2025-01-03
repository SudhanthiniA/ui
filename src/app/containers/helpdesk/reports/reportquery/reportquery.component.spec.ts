import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportqueryComponent } from './reportquery.component';

describe('ReportqueryComponent', () => {
  let component: ReportqueryComponent;
  let fixture: ComponentFixture<ReportqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
