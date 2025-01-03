import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb5Component } from './mb5.component';

describe('Mb5Component', () => {
  let component: Mb5Component;
  let fixture: ComponentFixture<Mb5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
