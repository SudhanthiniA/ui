import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb19Component } from './clb19.component';

describe('Clb19Component', () => {
  let component: Clb19Component;
  let fixture: ComponentFixture<Clb19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
