import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexpireComponent } from './viewexpire.component';

describe('ViewexpireComponent', () => {
  let component: ViewexpireComponent;
  let fixture: ComponentFixture<ViewexpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
