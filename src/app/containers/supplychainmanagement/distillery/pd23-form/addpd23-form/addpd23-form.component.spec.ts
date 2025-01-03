import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd23FormComponent } from './addpd23-form.component';

describe('Addpd23FormComponent', () => {
  let component: Addpd23FormComponent;
  let fixture: ComponentFixture<Addpd23FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd23FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd23FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
