import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewniraSt4Component } from './viewnira-st4.component';

describe('ViewniraSt4Component', () => {
  let component: ViewniraSt4Component;
  let fixture: ComponentFixture<ViewniraSt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewniraSt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewniraSt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
