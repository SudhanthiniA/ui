import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb4FormComponent } from './flb4-form.component';

describe('Flb4FormComponent', () => {
  let component: Flb4FormComponent;
  let fixture: ComponentFixture<Flb4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
