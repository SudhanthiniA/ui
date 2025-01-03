import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewniraSt3Component } from './viewnira-st3.component';

describe('ViewniraSt3Component', () => {
  let component: ViewniraSt3Component;
  let fixture: ComponentFixture<ViewniraSt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewniraSt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewniraSt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
