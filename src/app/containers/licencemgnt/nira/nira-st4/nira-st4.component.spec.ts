import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiraSt4Component } from './nira-st4.component';

describe('NiraSt4Component', () => {
  let component: NiraSt4Component;
  let fixture: ComponentFixture<NiraSt4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiraSt4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiraSt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
