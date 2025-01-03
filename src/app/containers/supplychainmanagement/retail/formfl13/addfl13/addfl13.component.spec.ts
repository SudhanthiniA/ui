import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl13Component } from './addfl13.component';

describe('Addfl13Component', () => {
  let component: Addfl13Component;
  let fixture: ComponentFixture<Addfl13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
