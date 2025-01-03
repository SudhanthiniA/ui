import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplereceivedComponent } from './samplereceived.component';

describe('SamplereceivedComponent', () => {
  let component: SamplereceivedComponent;
  let fixture: ComponentFixture<SamplereceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplereceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplereceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
