import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd21FormComponent } from './viewpd21-form.component';

describe('Viewpd21FormComponent', () => {
  let component: Viewpd21FormComponent;
  let fixture: ComponentFixture<Viewpd21FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd21FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd21FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
