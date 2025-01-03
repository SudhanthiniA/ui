import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiraSt1Component } from './nira-st1.component';

describe('NiraSt1Component', () => {
  let component: NiraSt1Component;
  let fixture: ComponentFixture<NiraSt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiraSt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiraSt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
