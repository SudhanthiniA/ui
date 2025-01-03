import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest9Component } from './viewtest9.component';

describe('Viewtest9Component', () => {
  let component: Viewtest9Component;
  let fixture: ComponentFixture<Viewtest9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
