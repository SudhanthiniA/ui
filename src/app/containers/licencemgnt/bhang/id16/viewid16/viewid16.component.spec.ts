import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewid16Component } from './viewid16.component';

describe('Viewid16Component', () => {
  let component: Viewid16Component;
  let fixture: ComponentFixture<Viewid16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewid16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewid16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
