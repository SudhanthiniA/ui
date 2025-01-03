import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd29FormComponent } from './addpd29-form.component';

describe('Addpd29FormComponent', () => {
  let component: Addpd29FormComponent;
  let fixture: ComponentFixture<Addpd29FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd29FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd29FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
