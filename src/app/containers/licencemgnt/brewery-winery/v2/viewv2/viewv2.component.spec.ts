import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewv2Component } from './viewv2.component';

describe('Viewv2Component', () => {
  let component: Viewv2Component;
  let fixture: ComponentFixture<Viewv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
