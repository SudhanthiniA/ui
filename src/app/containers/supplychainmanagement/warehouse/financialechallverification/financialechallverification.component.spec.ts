import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialechallverificationComponent } from './financialechallverification.component';

describe('FinancialechallverificationComponent', () => {
  let component: FinancialechallverificationComponent;
  let fixture: ComponentFixture<FinancialechallverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialechallverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialechallverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
