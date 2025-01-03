import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlystockComponent } from './monthlystock.component';

describe('MonthlystockComponent', () => {
  let component: MonthlystockComponent;
  let fixture: ComponentFixture<MonthlystockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlystockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlystockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
