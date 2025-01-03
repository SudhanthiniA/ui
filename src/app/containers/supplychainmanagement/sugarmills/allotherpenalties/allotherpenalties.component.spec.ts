import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotherpenaltiesComponent } from './allotherpenalties.component';

describe('AllotherpenaltiesComponent', () => {
  let component: AllotherpenaltiesComponent;
  let fixture: ComponentFixture<AllotherpenaltiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotherpenaltiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotherpenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
