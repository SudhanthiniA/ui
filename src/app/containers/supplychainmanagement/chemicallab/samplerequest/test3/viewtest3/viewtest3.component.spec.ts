import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest3Component } from './viewtest3.component';

describe('Viewtest3Component', () => {
  let component: Viewtest3Component;
  let fixture: ComponentFixture<Viewtest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
