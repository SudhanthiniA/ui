import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd13FormComponent } from './viewpd13-form.component';

describe('Viewpd13FormComponent', () => {
  let component: Viewpd13FormComponent;
  let fixture: ComponentFixture<Viewpd13FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd13FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd13FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
