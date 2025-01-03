import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl24Component } from './viewfl24.component';

describe('Viewfl24Component', () => {
  let component: Viewfl24Component;
  let fixture: ComponentFixture<Viewfl24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
