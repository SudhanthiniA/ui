import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiraSt3Component } from './nira-st3.component';

describe('NiraSt3Component', () => {
  let component: NiraSt3Component;
  let fixture: ComponentFixture<NiraSt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiraSt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiraSt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
