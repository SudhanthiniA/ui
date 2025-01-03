import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl32Pd25Component } from './addfl32-pd25.component';

describe('Addfl32Pd25Component', () => {
  let component: Addfl32Pd25Component;
  let fixture: ComponentFixture<Addfl32Pd25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl32Pd25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl32Pd25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
