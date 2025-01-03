import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleallocatedyearComponent } from './saleallocatedyear.component';

describe('SaleallocatedyearComponent', () => {
  let component: SaleallocatedyearComponent;
  let fixture: ComponentFixture<SaleallocatedyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleallocatedyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleallocatedyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
