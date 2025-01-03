import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptanceCl2Component } from './indentacceptance-cl2.component';

describe('IndentacceptanceCl2Component', () => {
  let component: IndentacceptanceCl2Component;
  let fixture: ComponentFixture<IndentacceptanceCl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptanceCl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptanceCl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
