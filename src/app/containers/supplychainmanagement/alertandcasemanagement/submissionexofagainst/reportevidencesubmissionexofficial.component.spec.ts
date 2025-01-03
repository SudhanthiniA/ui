import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportevidencesubmissionexofficialComponent } from './reportevidencesubmissionexofficial.component';

describe('ReportevidencesubmissionexofficialComponent', () => {
  let component: ReportevidencesubmissionexofficialComponent;
  let fixture: ComponentFixture<ReportevidencesubmissionexofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportevidencesubmissionexofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportevidencesubmissionexofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
