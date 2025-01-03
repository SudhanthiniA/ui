import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewsw1Component } from './viewsw1.component';

describe('Viewsw1Component', () => {
  let component: Viewsw1Component;
  let fixture: ComponentFixture<Viewsw1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewsw1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewsw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
