import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl6Component } from './viewfl6.component';

describe('Viewfl6Component', () => {
  let component: Viewfl6Component;
  let fixture: ComponentFixture<Viewfl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
