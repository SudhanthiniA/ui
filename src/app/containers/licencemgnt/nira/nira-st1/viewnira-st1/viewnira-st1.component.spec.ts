import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewniraSt1Component } from './viewnira-st1.component';

describe('ViewniraSt1Component', () => {
  let component: ViewniraSt1Component;
  let fixture: ComponentFixture<ViewniraSt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewniraSt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewniraSt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
