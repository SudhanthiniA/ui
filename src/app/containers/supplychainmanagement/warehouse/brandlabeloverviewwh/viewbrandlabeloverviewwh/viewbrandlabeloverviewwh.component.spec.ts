import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabeloverviewwhComponent } from './viewbrandlabeloverviewwh.component';

describe('ViewbrandlabeloverviewwhComponent', () => {
  let component: ViewbrandlabeloverviewwhComponent;
  let fixture: ComponentFixture<ViewbrandlabeloverviewwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabeloverviewwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabeloverviewwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
