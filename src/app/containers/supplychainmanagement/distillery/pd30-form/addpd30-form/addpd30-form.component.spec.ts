import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd30FormComponent } from './addpd30-form.component';

describe('Addpd30FormComponent', () => {
  let component: Addpd30FormComponent;
  let fixture: ComponentFixture<Addpd30FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd30FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd30FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
