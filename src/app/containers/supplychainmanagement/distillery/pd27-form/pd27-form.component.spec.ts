import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd27FormComponent } from './pd27-form.component';

describe('Pd27FormComponent', () => {
  let component: Pd27FormComponent;
  let fixture: ComponentFixture<Pd27FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd27FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd27FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
