import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd4FormComponent } from './viewpd4-form.component';

describe('Viewpd4FormComponent', () => {
  let component: Viewpd4FormComponent;
  let fixture: ComponentFixture<Viewpd4FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd4FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
