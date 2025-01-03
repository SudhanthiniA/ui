import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplerequestComponent } from './samplerequest.component';

describe('SamplerequestComponent', () => {
  let component: SamplerequestComponent;
  let fixture: ComponentFixture<SamplerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
