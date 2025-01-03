import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb6FormComponent } from './flb6-form.component';

describe('Flb6FormComponent', () => {
  let component: Flb6FormComponent;
  let fixture: ComponentFixture<Flb6FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb6FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb6FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
