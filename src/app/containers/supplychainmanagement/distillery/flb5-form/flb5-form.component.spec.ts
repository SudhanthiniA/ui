import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb5FormComponent } from './flb5-form.component';

describe('Flb5FormComponent', () => {
  let component: Flb5FormComponent;
  let fixture: ComponentFixture<Flb5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
