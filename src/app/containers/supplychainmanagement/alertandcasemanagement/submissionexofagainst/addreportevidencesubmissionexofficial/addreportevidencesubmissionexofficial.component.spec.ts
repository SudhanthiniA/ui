import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreportevidencesubmissionexofficialComponent } from './addreportevidencesubmissionexofficial.component';

describe('AddreportevidencesubmissionexofficialComponent', () => {
  let component: AddreportevidencesubmissionexofficialComponent;
  let fixture: ComponentFixture<AddreportevidencesubmissionexofficialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreportevidencesubmissionexofficialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreportevidencesubmissionexofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
