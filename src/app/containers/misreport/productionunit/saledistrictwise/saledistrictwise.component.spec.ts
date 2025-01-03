import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledistrictwiseComponent } from './saledistrictwise.component';

describe('SaledistrictwiseComponent', () => {
  let component: SaledistrictwiseComponent;
  let fixture: ComponentFixture<SaledistrictwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaledistrictwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaledistrictwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
