import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb1Component } from './viewb1.component';

describe('Viewb1Component', () => {
  let component: Viewb1Component;
  let fixture: ComponentFixture<Viewb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
