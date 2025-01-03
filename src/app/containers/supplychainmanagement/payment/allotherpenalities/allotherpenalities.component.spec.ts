import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotherpenalitiesComponent } from './allotherpenalities.component';

describe('AllotherpenalitiesComponent', () => {
  let component: AllotherpenalitiesComponent;
  let fixture: ComponentFixture<AllotherpenalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotherpenalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotherpenalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
