import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewl1Component } from './viewl1.component';

describe('Viewl1Component', () => {
  let component: Viewl1Component;
  let fixture: ComponentFixture<Viewl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
