import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl6Component } from './bwfl6.component';

describe('Bwfl6Component', () => {
  let component: Bwfl6Component;
  let fixture: ComponentFixture<Bwfl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
