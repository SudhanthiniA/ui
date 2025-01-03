import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewid3Component } from './viewid3.component';

describe('Viewid3Component', () => {
  let component: Viewid3Component;
  let fixture: ComponentFixture<Viewid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
