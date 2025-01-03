import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgatepasscancelComponent } from './viewgatepasscancel.component';

describe('ViewgatepasscancelComponent', () => {
  let component: ViewgatepasscancelComponent;
  let fixture: ComponentFixture<ViewgatepasscancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgatepasscancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgatepasscancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
