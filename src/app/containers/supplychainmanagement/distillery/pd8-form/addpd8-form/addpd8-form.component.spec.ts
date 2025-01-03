import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd8FormComponent } from './addpd8-form.component';

describe('Addpd8FormComponent', () => {
  let component: Addpd8FormComponent;
  let fixture: ComponentFixture<Addpd8FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd8FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd8FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
