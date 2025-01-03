import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandlabeloverviewComponent } from './viewbrandlabeloverview.component';

describe('ViewbrandlabeloverviewComponent', () => {
  let component: ViewbrandlabeloverviewComponent;
  let fixture: ComponentFixture<ViewbrandlabeloverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandlabeloverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandlabeloverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
