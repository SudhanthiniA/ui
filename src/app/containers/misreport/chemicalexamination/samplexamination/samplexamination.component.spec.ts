import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplexaminationComponent } from './samplexamination.component';

describe('SamplexaminationComponent', () => {
  let component: SamplexaminationComponent;
  let fixture: ComponentFixture<SamplexaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplexaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplexaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
