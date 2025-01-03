import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnworklistComponent } from './returnworklist.component';

describe('ReturnworklistComponent', () => {
  let component: ReturnworklistComponent;
  let fixture: ComponentFixture<ReturnworklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
