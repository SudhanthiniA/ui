import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportemailComponent } from './reportemail.component';

describe('ReportemailComponent', () => {
  let component: ReportemailComponent;
  let fixture: ComponentFixture<ReportemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
