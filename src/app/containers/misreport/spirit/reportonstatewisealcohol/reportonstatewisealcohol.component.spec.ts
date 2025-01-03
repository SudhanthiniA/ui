import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportonstatewisealcoholComponent } from './reportonstatewisealcohol.component';

describe('ReportonstatewisealcoholComponent', () => {
  let component: ReportonstatewisealcoholComponent;
  let fixture: ComponentFixture<ReportonstatewisealcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportonstatewisealcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportonstatewisealcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
