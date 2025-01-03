import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewl2Component } from './viewl2.component';

describe('Viewl2Component', () => {
  let component: Viewl2Component;
  let fixture: ComponentFixture<Viewl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
