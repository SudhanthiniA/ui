import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportonenapurchaseforclbysellerComponent } from './reportonenapurchaseforclbyseller.component';

describe('ReportonenapurchaseforclbysellerComponent', () => {
  let component: ReportonenapurchaseforclbysellerComponent;
  let fixture: ComponentFixture<ReportonenapurchaseforclbysellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportonenapurchaseforclbysellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportonenapurchaseforclbysellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
