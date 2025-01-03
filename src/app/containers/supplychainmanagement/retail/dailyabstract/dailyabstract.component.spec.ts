import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyabstractComponent } from './dailyabstract.component';

describe('DailyabstractComponent', () => {
  let component: DailyabstractComponent;
  let fixture: ComponentFixture<DailyabstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyabstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyabstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
