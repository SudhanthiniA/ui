import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb2Component } from './mb2.component';

describe('Mb2Component', () => {
  let component: Mb2Component;
  let fixture: ComponentFixture<Mb2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
