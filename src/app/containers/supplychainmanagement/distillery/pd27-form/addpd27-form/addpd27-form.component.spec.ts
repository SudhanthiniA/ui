import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd27FormComponent } from './addpd27-form.component';

describe('Addpd27FormComponent', () => {
  let component: Addpd27FormComponent;
  let fixture: ComponentFixture<Addpd27FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd27FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd27FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
