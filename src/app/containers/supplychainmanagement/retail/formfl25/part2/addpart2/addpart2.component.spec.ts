import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpart2Component } from './addpart2.component';

describe('Addpart2Component', () => {
  let component: Addpart2Component;
  let fixture: ComponentFixture<Addpart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
