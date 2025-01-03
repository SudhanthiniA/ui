import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb21Component } from './viewb21.component';

describe('Viewb21Component', () => {
  let component: Viewb21Component;
  let fixture: ComponentFixture<Viewb21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
