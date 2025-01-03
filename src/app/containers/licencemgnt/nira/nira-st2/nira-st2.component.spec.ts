import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiraSt2Component } from './nira-st2.component';

describe('NiraSt2Component', () => {
  let component: NiraSt2Component;
  let fixture: ComponentFixture<NiraSt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiraSt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiraSt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
