import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd4FormComponent } from './pd4-form.component';

describe('Pd4FormComponent', () => {
  let component: Pd4FormComponent;
  let fixture: ComponentFixture<Pd4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
