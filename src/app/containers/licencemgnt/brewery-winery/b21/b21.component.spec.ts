import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B21Component } from './b21.component';

describe('B21Component', () => {
  let component: B21Component;
  let fixture: ComponentFixture<B21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
