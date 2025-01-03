import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb11FormComponent } from './flb11-form.component';

describe('Flb11FormComponent', () => {
  let component: Flb11FormComponent;
  let fixture: ComponentFixture<Flb11FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb11FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb11FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
