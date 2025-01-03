import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb19Component } from './viewb19.component';

describe('Viewb19Component', () => {
  let component: Viewb19Component;
  let fixture: ComponentFixture<Viewb19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
