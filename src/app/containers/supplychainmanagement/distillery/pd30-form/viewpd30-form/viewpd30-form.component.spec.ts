import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd30FormComponent } from './viewpd30-form.component';

describe('Viewpd30FormComponent', () => {
  let component: Viewpd30FormComponent;
  let fixture: ComponentFixture<Viewpd30FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd30FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd30FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
