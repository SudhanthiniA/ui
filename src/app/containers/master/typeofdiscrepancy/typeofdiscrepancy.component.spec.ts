import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofdiscrepancyComponent } from './typeofdiscrepancy.component';

describe('TypeofdiscrepancyComponent', () => {
  let component: TypeofdiscrepancyComponent;
  let fixture: ComponentFixture<TypeofdiscrepancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofdiscrepancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofdiscrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
