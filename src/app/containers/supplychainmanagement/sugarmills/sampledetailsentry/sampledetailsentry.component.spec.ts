import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledetailsentryComponent } from './sampledetailsentry.component';

describe('SampledetailsentryComponent', () => {
  let component: SampledetailsentryComponent;
  let fixture: ComponentFixture<SampledetailsentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledetailsentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledetailsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
