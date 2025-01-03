import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd22Component } from './view-pd22.component';

describe('ViewPd22Component', () => {
  let component: ViewPd22Component;
  let fixture: ComponentFixture<ViewPd22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
