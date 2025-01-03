import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd29FormComponent } from './viewpd29-form.component';

describe('Viewpd29FormComponent', () => {
  let component: Viewpd29FormComponent;
  let fixture: ComponentFixture<Viewpd29FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd29FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd29FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
