import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl32Pd25Component } from './viewfl32-pd25.component';

describe('Viewfl32Pd25Component', () => {
  let component: Viewfl32Pd25Component;
  let fixture: ComponentFixture<Viewfl32Pd25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl32Pd25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl32Pd25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
