import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd18FormComponent } from './addpd18-form.component';

describe('Addpd18FormComponent', () => {
  let component: Addpd18FormComponent;
  let fixture: ComponentFixture<Addpd18FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd18FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd18FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
