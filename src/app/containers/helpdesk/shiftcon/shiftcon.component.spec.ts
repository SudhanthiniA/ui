import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftconComponent } from './shiftcon.component';

describe('ShiftconComponent', () => {
  let component: ShiftconComponent;
  let fixture: ComponentFixture<ShiftconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
