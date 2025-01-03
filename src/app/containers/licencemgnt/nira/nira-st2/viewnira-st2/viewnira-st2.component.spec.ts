import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewniraSt2Component } from './viewnira-st2.component';

describe('ViewniraSt2Component', () => {
  let component: ViewniraSt2Component;
  let fixture: ComponentFixture<ViewniraSt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewniraSt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewniraSt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
