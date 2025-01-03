import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd4FormComponent } from './addpd4-form.component';

describe('Addpd4FormComponent', () => {
  let component: Addpd4FormComponent;
  let fixture: ComponentFixture<Addpd4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
