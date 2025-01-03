import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flid3Component } from './flid3.component';

describe('Flid3Component', () => {
  let component: Flid3Component;
  let fixture: ComponentFixture<Flid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flid3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
