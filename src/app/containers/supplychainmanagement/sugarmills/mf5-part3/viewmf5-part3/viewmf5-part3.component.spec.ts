import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf5Part3Component } from './viewmf5-part3.component';

describe('Viewmf5Part3Component', () => {
  let component: Viewmf5Part3Component;
  let fixture: ComponentFixture<Viewmf5Part3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf5Part3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf5Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
