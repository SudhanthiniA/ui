import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B19Component } from './b19.component';

describe('B19Component', () => {
  let component: B19Component;
  let fixture: ComponentFixture<B19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
