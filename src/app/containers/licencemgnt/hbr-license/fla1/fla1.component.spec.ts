import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fla1Component } from './fla1.component';

describe('Fla1Component', () => {
  let component: Fla1Component;
  let fixture: ComponentFixture<Fla1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fla1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
