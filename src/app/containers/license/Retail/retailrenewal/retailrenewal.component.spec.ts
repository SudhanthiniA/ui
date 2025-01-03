import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailrenewalComponent } from './retailrenewal.component';

describe('RetailrenewalComponent', () => {
  let component: RetailrenewalComponent;
  let fixture: ComponentFixture<RetailrenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailrenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
