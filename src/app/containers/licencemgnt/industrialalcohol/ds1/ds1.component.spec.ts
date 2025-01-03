import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ds1Component } from './ds1.component';

describe('Ds1Component', () => {
  let component: Ds1Component;
  let fixture: ComponentFixture<Ds1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ds1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ds1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
