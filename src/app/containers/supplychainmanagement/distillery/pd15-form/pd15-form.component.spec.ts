import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd15FormComponent } from './pd15-form.component';

describe('Pd15FormComponent', () => {
  let component: Pd15FormComponent;
  let fixture: ComponentFixture<Pd15FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd15FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
