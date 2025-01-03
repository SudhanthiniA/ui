import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb1Component } from './mb1.component';

describe('Mb1Component', () => {
  let component: Mb1Component;
  let fixture: ComponentFixture<Mb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
