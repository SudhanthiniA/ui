import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl28Component } from './viewfl28.component';

describe('Viewfl28Component', () => {
  let component: Viewfl28Component;
  let fixture: ComponentFixture<Viewfl28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
