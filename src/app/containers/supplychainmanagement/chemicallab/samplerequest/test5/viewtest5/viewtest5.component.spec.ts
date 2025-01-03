import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest5Component } from './viewtest5.component';

describe('Viewtest5Component', () => {
  let component: Viewtest5Component;
  let fixture: ComponentFixture<Viewtest5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
