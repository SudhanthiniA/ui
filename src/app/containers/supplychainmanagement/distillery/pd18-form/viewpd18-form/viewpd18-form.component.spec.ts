import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd18FormComponent } from './viewpd18-form.component';

describe('Viewpd18FormComponent', () => {
  let component: Viewpd18FormComponent;
  let fixture: ComponentFixture<Viewpd18FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd18FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd18FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
