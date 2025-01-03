import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogserachComponent } from './logserach.component';

describe('LogserachComponent', () => {
  let component: LogserachComponent;
  let fixture: ComponentFixture<LogserachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogserachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
