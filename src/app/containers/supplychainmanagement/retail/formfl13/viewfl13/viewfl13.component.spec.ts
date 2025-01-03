import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl13Component } from './viewfl13.component';

describe('Viewfl13Component', () => {
  let component: Viewfl13Component;
  let fixture: ComponentFixture<Viewfl13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
