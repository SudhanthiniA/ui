import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsbondapplicationsummaryComponent } from './wsbondapplicationsummary.component';

describe('WsbondapplicationsummaryComponent', () => {
  let component: WsbondapplicationsummaryComponent;
  let fixture: ComponentFixture<WsbondapplicationsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsbondapplicationsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsbondapplicationsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
