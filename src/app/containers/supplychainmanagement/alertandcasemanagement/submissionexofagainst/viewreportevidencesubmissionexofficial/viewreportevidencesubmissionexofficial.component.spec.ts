import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreportevidencesubmissionexofficialComponent } from './viewreportevidencesubmissionexofficial.component';

describe('ViewreportevidencesubmissionexofficialComponent', () => {
  let component: ViewreportevidencesubmissionexofficialComponent;
  let fixture: ComponentFixture<ViewreportevidencesubmissionexofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreportevidencesubmissionexofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreportevidencesubmissionexofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
