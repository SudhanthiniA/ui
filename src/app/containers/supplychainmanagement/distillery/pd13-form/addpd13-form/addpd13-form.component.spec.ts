import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd13FormComponent } from './addpd13-form.component';

describe('Addpd13FormComponent', () => {
  let component: Addpd13FormComponent;
  let fixture: ComponentFixture<Addpd13FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd13FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd13FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
