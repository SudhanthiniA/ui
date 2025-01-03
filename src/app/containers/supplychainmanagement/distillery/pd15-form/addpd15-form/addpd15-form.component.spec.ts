import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd15FormComponent } from './addpd15-form.component';

describe('Addpd15FormComponent', () => {
  let component: Addpd15FormComponent;
  let fixture: ComponentFixture<Addpd15FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd15FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
