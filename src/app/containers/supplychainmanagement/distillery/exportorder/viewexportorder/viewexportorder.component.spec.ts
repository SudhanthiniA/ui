import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexportorderComponent } from './viewexportorder.component';

describe('ViewexportorderComponent', () => {
  let component: ViewexportorderComponent;
  let fixture: ComponentFixture<ViewexportorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexportorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
