import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionliftingprocessComponent } from './exceptionliftingprocess.component';

describe('ExceptionliftingprocessComponent', () => {
  let component: ExceptionliftingprocessComponent;
  let fixture: ComponentFixture<ExceptionliftingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionliftingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionliftingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
