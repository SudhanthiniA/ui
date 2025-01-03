import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B14Component } from './b14.component';

describe('B14Component', () => {
  let component: B14Component;
  let fixture: ComponentFixture<B14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
