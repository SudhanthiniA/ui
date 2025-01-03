import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd32FormComponent } from './viewpd32-form.component';

describe('Viewpd32FormComponent', () => {
  let component: Viewpd32FormComponent;
  let fixture: ComponentFixture<Viewpd32FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd32FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd32FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
