import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb14Component } from './addb14.component';

describe('Addb14Component', () => {
  let component: Addb14Component;
  let fixture: ComponentFixture<Addb14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
