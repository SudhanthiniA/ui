import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcomplaintComponent } from './reportcomplaint.component';

describe('ReportcomplaintComponent', () => {
  let component: ReportcomplaintComponent;
  let fixture: ComponentFixture<ReportcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
