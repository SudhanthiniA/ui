import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpart3Component } from './addpart3.component';

describe('Addpart3Component', () => {
  let component: Addpart3Component;
  let fixture: ComponentFixture<Addpart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
