import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingactivitylogComponent } from './logingactivitylog.component';

describe('LogingactivitylogComponent', () => {
  let component: LogingactivitylogComponent;
  let fixture: ComponentFixture<LogingactivitylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingactivitylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingactivitylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
