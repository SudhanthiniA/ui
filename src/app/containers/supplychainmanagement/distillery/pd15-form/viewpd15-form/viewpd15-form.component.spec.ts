import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd15FormComponent } from './viewpd15-form.component';

describe('Viewpd15FormComponent', () => {
  let component: Viewpd15FormComponent;
  let fixture: ComponentFixture<Viewpd15FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd15FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
