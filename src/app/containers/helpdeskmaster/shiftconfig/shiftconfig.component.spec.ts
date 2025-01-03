import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftconfigComponent } from './shiftconfig.component';

describe('ShiftconfigComponent', () => {
  let component: ShiftconfigComponent;
  let fixture: ComponentFixture<ShiftconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
