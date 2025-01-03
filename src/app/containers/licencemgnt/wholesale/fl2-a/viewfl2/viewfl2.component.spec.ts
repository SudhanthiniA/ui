import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl2Component } from './viewfl2.component';

describe('Viewfl2Component', () => {
  let component: Viewfl2Component;
  let fixture: ComponentFixture<Viewfl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
