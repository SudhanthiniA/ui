import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleallocatedmonthComponent } from './saleallocatedmonth.component';

describe('SaleallocatedmonthComponent', () => {
  let component: SaleallocatedmonthComponent;
  let fixture: ComponentFixture<SaleallocatedmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleallocatedmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleallocatedmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
