import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalgatepassComponent } from './finalgatepass.component';

describe('FinalgatepassComponent', () => {
  let component: FinalgatepassComponent;
  let fixture: ComponentFixture<FinalgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
