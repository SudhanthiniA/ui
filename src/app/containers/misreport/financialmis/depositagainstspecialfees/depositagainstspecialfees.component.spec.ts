import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositagainstspecialfeesComponent } from './depositagainstspecialfees.component';

describe('DepositagainstspecialfeesComponent', () => {
  let component: DepositagainstspecialfeesComponent;
  let fixture: ComponentFixture<DepositagainstspecialfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositagainstspecialfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositagainstspecialfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
