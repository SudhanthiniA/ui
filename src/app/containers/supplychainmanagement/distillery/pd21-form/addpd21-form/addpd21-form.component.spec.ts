import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd21FormComponent } from './addpd21-form.component';

describe('Addpd21FormComponent', () => {
  let component: Addpd21FormComponent;
  let fixture: ComponentFixture<Addpd21FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd21FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd21FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
