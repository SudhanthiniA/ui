import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumbarrelregistrationComponent } from './drumbarrelregistration.component';

describe('DrumbarrelregistrationComponent', () => {
  let component: DrumbarrelregistrationComponent;
  let fixture: ComponentFixture<DrumbarrelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumbarrelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumbarrelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
